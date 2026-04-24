import '../App.css'
import FloatersBackground from '../components/FloatersBackground'
import WelcomeTextLabel from '../components/WelcomeTextLabel'

function ResumePage() {
	return (
		<main className="page page--resume">
			<div className="page__background">
				<FloatersBackground />
			</div>
			<section className="page__content">
				<WelcomeTextLabel textKey="resume" />
			</section>
		</main>
	)
}

export default ResumePage