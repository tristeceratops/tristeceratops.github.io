import '../App.css'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import WelcomeTextLabel from './WelcomeTextLabel'
import MainBackground from './MainBackground'

function AboutPage() {
	return (
		<main className="welcomepage">
			<div className="welcomepage-background">
				<MainBackground />
			</div>
			<MainHeader />
			<section className="welcomepage-content">
				<WelcomeTextLabel textKey="about" />
			</section>
			<MainFooter />
		</main>
	)
}

export default AboutPage