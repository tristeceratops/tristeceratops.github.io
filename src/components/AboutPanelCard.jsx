function AboutPanelCard({
	title,
	borderColor,
	textColor,
	backgroundGradientColor,
	className = '',
	style = {},
	children,
}) {
	const panelStyle = {
		'--panel-border-color': borderColor,
		'--panel-text-color': textColor,
		'--background-gradient-color': backgroundGradientColor,
		...style,
	}

	return (
		<article className={`about-panel ${className}`.trim()} style={panelStyle}>
			<h2 className="about-panel__title">{title}</h2>
			<div className="about-panel-card__content">{children}</div>
		</article>
	)
}

export default AboutPanelCard