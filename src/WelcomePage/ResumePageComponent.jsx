import '../App.css'
import ConicRayBackground from './ConicRayBackground'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import WelcomeTextLabel from './WelcomeTextLabel'

function ResumePage() {
	return (
		<main className="welcomepage">
			<div className="welcomepage-background">
				<ConicRayBackground />
			</div>
			<MainHeader />
			<section className="welcomepage-content">
				<WelcomeTextLabel textKey="resume" />
			</section>
			<MainFooter />
		</main>
	)
}

export default ResumePage