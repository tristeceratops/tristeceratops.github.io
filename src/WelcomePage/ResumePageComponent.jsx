import '../App.css'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import WelcomeTextLabel from './WelcomeTextLabel'
import MainBackground from './MainBackground'

function ResumePage() {
	return (
		<main className="welcomepage">
			<div className="welcomepage-background">
				<MainBackground />
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