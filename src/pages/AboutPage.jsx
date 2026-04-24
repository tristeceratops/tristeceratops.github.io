import '../App.css'
import FloatersBackground from '../components/FloatersBackground'

function AboutPage() {
	return (
		<main className="page page--about">
			<div className="page__background">
				<FloatersBackground />
			</div>
			<section className="page__content page__content--about">
				<div className="about-grid">
					<div className="about-column about-column--left about-panel about-panel--aboutme">
						<h1 className="about-panel__title">Éric Woillard</h1>
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dolor odio, porttitor in sapien quis, vulputate sagittis tortor. Donec vel gravida risus. Sed molestie metus et arcu cursus, sit amet aliquet sem mollis. Mauris efficitur luctus nibh nec congue. Integer lorem metus, varius eu porta ut, varius eu eros. Vivamus porta sit amet dolor non varius. Aliquam accumsan lorem sed lacus varius sollicitudin. In hac habitasse platea dictumst. Morbi suscipit velit eu orci posuere, nec tincidunt nisl tincidunt. Praesent cursus bibendum nibh ac posuere. Proin at euismod odio. Donec venenatis vehicula urna ac dapibus. Phasellus sed leo suscipit, semper mi in, consectetur arcu. Aenean et diam in diam ornare consequat. Nullam pellentesque, nunc nec bibendum iaculis, lorem turpis hendrerit ante, eu tempor massa urna vel nisi. Proin luctus tempor odio sed ultricies.
							Curabitur eget pharetra nulla. Phasellus tempus scelerisque vestibulum. Phasellus malesuada augue vel odio euismod, ut lobortis dui egestas. Maecenas porta eros magna, et vulputate erat viverra ac. Nullam in venenatis ligula. Suspendisse sit amet sapien ante. Vestibulum vel consectetur lorem. Maecenas condimentum tincidunt erat. Ut id ante sit amet tortor facilisis tincidunt. Maecenas sed semper ligula. Maecenas accumsan mollis eros at pharetra. Cras eu sagittis nisl, eu ultricies mauris. Integer tempor pellentesque tellus, vitae sagittis mi bibendum nec.
							Curabitur eget pharetra nulla. Phasellus tempus scelerisque vestibulum. Phasellus malesuada augue vel odio euismod, ut lobortis dui egestas. Maecenas porta eros magna, et vulputate erat viverra ac. Nullam in venenatis ligula. Suspendisse sit amet sapien ante. Vestibulum vel consectetur lorem. Maecenas condimentum tincidunt erat. Ut id ante sit amet tortor facilisis tincidunt. Maecenas sed semper ligula. Maecenas accumsan mollis eros at pharetra. Cras eu sagittis nisl, eu ultricies mauris. Integer tempor pellentesque tellus, vitae sagittis mi bibendum nec.
							Curabitur eget pharetra nulla. Phasellus tempus scelerisque vestibulum. Phasellus malesuada augue vel odio euismod, ut lobortis dui egestas. Maecenas porta eros magna, et vulputate erat viverra ac. Nullam in venenatis ligula. Suspendisse sit amet sapien ante. Vestibulum vel consectetur lorem. Maecenas condimentum tincidunt erat. Ut id ante sit amet tortor facilisis tincidunt. Maecenas sed semper ligula. Maecenas accumsan mollis eros at pharetra. Cras eu sagittis nisl, eu ultricies mauris. Integer tempor pellentesque tellus, vitae sagittis mi bibendum nec.
						</p>
					</div>
					<div className="about-column about-column--right about-panel about-panel--education">
						<h1 className="about-panel__title">Education</h1>
						<p> Donec a interdum ligula, a fringilla ante. Donec viverra imperdiet facilisis. Nulla pretium orci ac arcu viverra, bibendum luctus arcu molestie. Proin efficitur egestas dui, at faucibus arcu faucibus in. Etiam quis ipsum nec magna ultricies convallis. Donec convallis ornare lacus, non rutrum purus iaculis nec. In porta nec nunc eu tempor. Maecenas sagittis porttitor dictum.

							Duis ullamcorper nisl ut tellus vehicula hendrerit. Proin non ante ut lacus gravida venenatis nec eget turpis. Sed enim felis, iaculis et vehicula sed, sodales non nunc. Integer feugiat eget tortor sit amet porta. Praesent vel ante et dui dictum dapibus sit amet id ex. In pulvinar malesuada ligula sed scelerisque. Morbi cursus tempus elit, sed pulvinar metus blandit in. Aliquam vel orci eget mauris venenatis efficitur. Donec quis scelerisque quam, et condimentum odio. Nunc eget turpis pulvinar, mollis purus nec, aliquet dui. </p>
					</div>
				</div>
			</section>
		</main>
	)
}

export default AboutPage