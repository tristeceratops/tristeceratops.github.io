import '../App.css'
import FloatersBackground from '../components/FloatersBackground'
import WelcomeTextLabel from '../components/WelcomeTextLabel'

function ProjectsPage() {
	return (
		<main className="page page--projects">
			<div className="page__background">
				<FloatersBackground />
			</div>
			<section className="page__content">
				<WelcomeTextLabel textKey="projects" />
			</section>
		</main>
	)
}

export default ProjectsPage