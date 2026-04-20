import '../App.css'
import ConicRayBackground from './ConicRayBackground'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import WelcomeTextLabel from './WelcomeTextLabel'

function WelcomePage() {
  return (
	<main className="welcome-page">
	  <div className="welcome-page__background">
		<ConicRayBackground />
	  </div>
	  <MainHeader />
	  <section className="welcome-page__content">
		<WelcomeTextLabel textKey="welcome" />
	  </section>
	  <MainFooter/>
	</main>
  )
}
export default WelcomePage
