import '../App.css'
import ConicRayBackground from './ConicRayBackground'
import WelcomeTextLabel from './WelcomeTextLabel'

function WelcomePage() {

  return (
	<main className="welcomepage">
	  <div className="welcomepage-background">
		<ConicRayBackground />
	  </div>
	  <WelcomeTextLabel />
	</main>
  )
}
export default WelcomePage
