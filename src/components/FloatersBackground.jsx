import { useEffect, useRef, useState } from 'react'
import directionControllerSvg from '../assets/svg/direction-controller.svg?raw'
import pacmanSvg from '../assets/svg/pacman.svg?raw'
import spaceInvadersSvg from '../assets/svg/space-invaders.svg?raw'
import starPowerupSvg from '../assets/svg/star-powerup.svg?raw'

const ICONS = [
	pacmanSvg,
	starPowerupSvg,
	spaceInvadersSvg,
	directionControllerSvg,
]
const MAX_FLOATERS = 28
const SPAWN_INTERVAL_MS = 420
const OFFSCREEN_MARGIN = 96

function randomBetween(min, max) {
	return Math.random() * (max - min) + min
}

function clamp(number, min, max) {
	return Math.min(max, Math.max(min, number))
}

function parseHexColor(hexColor) {
	const clean = hexColor.trim().replace('#', '')

	if (clean.length !== 6) {
		return { r: 68, g: 255, b: 0 }
	}

	return {
		r: Number.parseInt(clean.slice(0, 2), 16),
		g: Number.parseInt(clean.slice(2, 4), 16),
		b: Number.parseInt(clean.slice(4, 6), 16),
	}
}

function rgbToHex({ r, g, b }) {
	const componentToHex = (component) => {
		const value = clamp(Math.round(component), 0, 255)
		return value.toString(16).padStart(2, '0')
	}

	return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
}

function blendColors(colorA, colorB, mix) {
	return rgbToHex({
		r: colorA.r + (colorB.r - colorA.r) * mix,
		g: colorA.g + (colorB.g - colorA.g) * mix,
		b: colorA.b + (colorB.b - colorA.b) * mix,
	})
}

function svgToDataUri(svgMarkup) {
	return `data:image/svg+xml,${encodeURIComponent(svgMarkup)}`
}

function colorizeSvg(svgMarkup, color) {
	return svgMarkup
		.replace('<svg', `<svg fill="${color}" color="${color}"`)
		.replace(/<path\b/g, `<path fill="${color}"`)
		.replaceAll('#000000', color)
}

function getFloaterBounds() {
	const outletWrapper = document.querySelector('.outlet-wrapper')

	if (outletWrapper) {
		return {
			width: Math.max(outletWrapper.scrollWidth, outletWrapper.clientWidth, window.innerWidth),
			height: Math.max(outletWrapper.scrollHeight, outletWrapper.clientHeight, window.innerHeight),
		}
	}

	return {
		width: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth, window.innerWidth),
		height: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, window.innerHeight),
	}
}

function createFloater(id, width, height, colorA, colorB) {
	const side = Math.floor(randomBetween(0, 4))
	let startX = 0
	let startY = 0
	let endX = 0
	let endY = 0

	if (side === 0) {
		startX = -OFFSCREEN_MARGIN
		startY = randomBetween(-OFFSCREEN_MARGIN, height + OFFSCREEN_MARGIN)
		endX = width + OFFSCREEN_MARGIN
		endY = startY + randomBetween(-height * 0.45, height * 0.45)
	} else if (side === 1) {
		startX = width + OFFSCREEN_MARGIN
		startY = randomBetween(-OFFSCREEN_MARGIN, height + OFFSCREEN_MARGIN)
		endX = -OFFSCREEN_MARGIN
		endY = startY + randomBetween(-height * 0.45, height * 0.45)
	} else if (side === 2) {
		startX = randomBetween(-OFFSCREEN_MARGIN, width + OFFSCREEN_MARGIN)
		startY = -OFFSCREEN_MARGIN
		endX = startX + randomBetween(-width * 0.45, width * 0.45)
		endY = height + OFFSCREEN_MARGIN
	} else {
		startX = randomBetween(-OFFSCREEN_MARGIN, width + OFFSCREEN_MARGIN)
		startY = height + OFFSCREEN_MARGIN
		endX = startX + randomBetween(-width * 0.45, width * 0.45)
		endY = -OFFSCREEN_MARGIN
	}

	const travelX = endX - startX
	const travelY = endY - startY
	const iconColor = blendColors(colorA, colorB, Math.random())
	const iconTemplate = ICONS[Math.floor(randomBetween(0, ICONS.length))]

	return {
		id,
		iconSrc: svgToDataUri(colorizeSvg(iconTemplate, iconColor)),
		startX,
		startY,
		travelX,
		travelY,
		size: randomBetween(24, 92),
		duration: randomBetween(9000, 19000),
		opacity: randomBetween(0.35, 0.9),
		isDespawning: false,
		rotationStart: randomBetween(0, 360),
		rotationEnd: randomBetween(-220, 220),
	}
}

export default function FloatersBackground() {
	const [floaters, setFloaters] = useState([])
	const nextIdRef = useRef(1)
	const colorRangeRef = useRef({
		colorA: parseHexColor('#0F9AA2'),
		colorB: parseHexColor('#F0655D'),
	})

	useEffect(() => {
		const rootStyles = window.getComputedStyle(document.documentElement)
		const colorA = rootStyles.getPropertyValue('--color-icon-background1') || '#0F9AA2'
		const colorB = rootStyles.getPropertyValue('--color-icon-background2') || '#F0655D'

		colorRangeRef.current = {
			colorA: parseHexColor(colorA),
			colorB: parseHexColor(colorB),
		}
	}, [])

	useEffect(() => {
		const spawnFloater = () => {
			const { width, height } = getFloaterBounds()
			const { colorA, colorB } = colorRangeRef.current

			const newFloater = createFloater(
				nextIdRef.current,
				width,
				height,
				colorA,
				colorB
			)

			nextIdRef.current += 1

			setFloaters((previousFloaters) => {
				let nextFloaters = [...previousFloaters, newFloater]

				const aliveFloaters = nextFloaters.filter(
					(floater) => !floater.isDespawning
				)

				if (aliveFloaters.length > MAX_FLOATERS) {
					const oldestId = aliveFloaters[0].id

					nextFloaters = nextFloaters.map((floater) =>
						floater.id === oldestId
							? { ...floater, isDespawning: true }
							: floater
					)
				}

				return nextFloaters
			})
		}

		spawnFloater()

		const intervalId = window.setInterval(
			spawnFloater,
			SPAWN_INTERVAL_MS
		)

		return () => window.clearInterval(intervalId)
	}, [])

	const handleAnimationEnd = (id) => {
		setFloaters((previousFloaters) =>
			previousFloaters.map((floater) =>
				floater.id === id ? { ...floater, isDespawning: true } : floater,
			),
		)
	}

	const handleTransitionEnd = (id, event) => {
		if (event.propertyName !== 'opacity') {
			return
		}

		setFloaters((previousFloaters) =>
			previousFloaters.filter((floater) => !(floater.id === id && floater.isDespawning)),
		)
	}

	return (
		<div className="background">
			<div className="inner-background main-background" aria-hidden="true">
				{floaters.map((floater) => (
					<img
						key={floater.id}
						className="main-background__icon"
						src={floater.iconSrc}
						alt=""
						draggable="false"
						onAnimationEnd={() => handleAnimationEnd(floater.id)}
						onTransitionEnd={(event) => handleTransitionEnd(floater.id, event)}
						style={{
							'--start-x': `${floater.startX}px`,
							'--start-y': `${floater.startY}px`,
							'--travel-x': `${floater.travelX}px`,
							'--travel-y': `${floater.travelY}px`,
							'--icon-size': `${floater.size}px`,
							'--travel-duration': `${floater.duration}ms`,
							'--icon-opacity': floater.opacity,
							transition: 'opacity 1200ms linear',
							opacity: floater.isDespawning ? 0 : floater.opacity,
							'--icon-rotation-start': `${floater.rotationStart}deg`,
							'--icon-rotation-end': `${floater.rotationEnd}deg`,
						}}
					/>
				))}
			</div>
		</div>
	)
}