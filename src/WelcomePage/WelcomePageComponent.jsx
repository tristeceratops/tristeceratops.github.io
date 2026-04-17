import '../App.css'
import ConicRayBackground from './ConicRayBackground'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import WelcomeTextLabel from './WelcomeTextLabel'

function WelcomePage() {
  return (
	<main className="welcomepage">
	  <div className="welcomepage-background">
		<ConicRayBackground />
	  </div>
	  <MainHeader />
	  <section className="welcomepage-content">
		<WelcomeTextLabel textKey="welcome" />
	  </section>
	  <MainFooter/>
	</main>
  )
}
export default WelcomePage
