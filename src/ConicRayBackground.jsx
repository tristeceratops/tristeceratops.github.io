import { useEffect, useRef } from 'react'

export default function ConicRayBackground() {
  const backgroundRef = useRef(null)

  useEffect(() => {
    const element = backgroundRef.current

    if (!element) {
      return
    }

    let lastPointerX = null
    let lastPointerY = null

    const updateRayAngle = (clientX, clientY) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const angle =
        ((Math.atan2(clientY - centerY, clientX - centerX) * 180) / Math.PI + 90 +
          360) %
        360

      element.style.setProperty('--ray-angle', `${angle}deg`)
    }

    const handlePointerMove = (event) => {
      lastPointerX = event.clientX
      lastPointerY = event.clientY
      updateRayAngle(lastPointerX, lastPointerY)
    }

    const handleResize = () => {
      if (lastPointerX !== null && lastPointerY !== null) {
        updateRayAngle(lastPointerX, lastPointerY)
      }
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div ref={backgroundRef} className="conic-ray-background" aria-hidden="true">
      <div className="conic-ray-background__gradient" />
    </div>
  )
}