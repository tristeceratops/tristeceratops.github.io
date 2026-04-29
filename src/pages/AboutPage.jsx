import '../App.css'
import FloatersBackground from '../components/FloatersBackground'
import AboutPanelCard from '../components/AboutPanelCard'

function AboutPage() {
	return (
		<main className="page page--about">
			<div className="page__background">
				<FloatersBackground />
			</div>
			<section className="page__content page__content--about">
				<div className="about-pannels-wrapper">
					<AboutPanelCard
						title="About Me"
						borderColor="#0F9AA2"
						backgroundGradientColor="#0F9AA2"
						textColor="#ffffff"
						className="about-panel-1"
					>
						<p>
							Web, cybersécurité, jeu-vidéo... pas grand chose n'arrête ma curiosité.<br></br>
							Je me décris comme étant un touche-à-tout dans l'informatique. Pas de domaine de prédilection, juste des connaissances et du fun.
						</p>
					</AboutPanelCard>
					<AboutPanelCard
						title="Education"
						borderColor="#F0655D"
						backgroundGradientColor="#F0655D"
						textColor="#ffffff"
						className="about-panel-2"
					>
						<p> DUT INFO -{'>'} 42 Luxembourg -{'>'} DLH Cybersecurity Academy
						</p>
					</AboutPanelCard>
					<AboutPanelCard
						title="Experience"
						borderColor="#0F9AA2"
						backgroundGradientColor="#0F9AA2"
						textColor="#ffffff"
						className="about-panel-3"
					>
						<p>
							Stage du DUT -{'>'} service civique
						</p>
					</AboutPanelCard>
					<AboutPanelCard
						title="Hobbies"
						borderColor="#F0655D"
						backgroundGradientColor="#F0655D"
						textColor="#ffffff"
						className="about-panel-4"
					>
						<p>
							Jeux vidéos, technologies, dinosaures
						</p>
					</AboutPanelCard>
				</div>
			</section>
		</main>
	)
}

export default AboutPage