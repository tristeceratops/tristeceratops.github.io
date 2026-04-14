import '../App.css'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageToggleButton from './LanguageToggleButton'

export default function WelcomeHeader() {
	const { t } = useLanguage()

	return (
		<header className="welcomepage-header" aria-label="Primary navigation">
			<div className="welcomepage-header__buttons">
				<button type="button" className="main-button-style">
					{t('home')}
				</button>
				<button type="button" className="main-button-style">
					{t('about')}
				</button>
				<button type="button" className="main-button-style">
					{t('projects')}
				</button>
				<button type="button" className="main-button-style">
					{t('resume')}
				</button>
				<LanguageToggleButton />
			</div>
		</header>
	)
}
