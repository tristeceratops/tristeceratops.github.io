import '../App.css'
import ConicRayBackground from './ConicRayBackground'
import LanguageToggleButton from './LanguageToggleButton'
import WelcomeTextLabel from './WelcomeTextLabel'

function WelcomePage() {
  return (
	<main className="welcomepage">
	  <div className="welcomepage-background">
		<ConicRayBackground />
	  </div>
	  <LanguageToggleButton />
	  <WelcomeTextLabel textKey="welcome" />
	</main>
  )
}
export default WelcomePage
