import '../App.css'
import ConicRayBackground from '../components/ConicRayBackground'
import WelcomeTextLabel from '../components/WelcomeTextLabel'

function HomePage() {
  return (
	<main className="page page--home">
	  <div className="page__background">
		<ConicRayBackground />
	  </div>
	  <section className="page__content">
		<WelcomeTextLabel textKey="welcome" />
	  </section>
	</main>
  )
}
export default HomePage
