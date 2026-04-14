import '../App.css'
import ConicRayBackground from './ConicRayBackground'
import WelcomeHeader from './WelcomeHeader'
import MainFooter from './Footer'
import WelcomeTextLabel from './WelcomeTextLabel'

function WelcomePage() {
  return (
	<main className="welcomepage">
	  <div className="welcomepage-background">
		<ConicRayBackground />
	  </div>
	  <WelcomeHeader />
	  <section className="welcomepage-content">
		<WelcomeTextLabel textKey="welcome" />
	  </section>
	  <MainFooter/>
	</main>
  )
}
export default WelcomePage
