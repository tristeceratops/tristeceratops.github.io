import '../App.css'
import MainBackground from '../components/FloatersBackground'
import WelcomeTextLabel from '../components/WelcomeTextLabel'

function ProjectsPage() {
	return (
		<main className="page page--projects">
			<div className="page__background">
				<MainBackground />
			</div>
			<section className="page__content">
				<WelcomeTextLabel textKey="projects" />
			</section>
		</main>
	)
}

export default ProjectsPage