import '../App.css'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageToggleButton from './LanguageToggleButton'

export default function MainHeader() {
	const { t } = useLanguage()

	return (
		<>
			<header className="welcomepage-header" aria-label="Primary navigation">
				<div className="welcomepage-header__buttons">
					<NavLink
						to="/"
						end
						className={({ isActive }) =>
							`main-button-style ${isActive ? 'main-button-style--active' : ''}`.trim()
						}
					>
						{t('home')}
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							`main-button-style ${isActive ? 'main-button-style--active' : ''}`.trim()
						}
					>
						{t('about')}
					</NavLink>
					<NavLink
						to="/projects"
						className={({ isActive }) =>
							`main-button-style ${isActive ? 'main-button-style--active' : ''}`.trim()
						}
					>
						{t('projects')}
					</NavLink>
					<NavLink
						to="/resume"
						className={({ isActive }) =>
							`main-button-style ${isActive ? 'main-button-style--active' : ''}`.trim()
						}
					>
						{t('resume')}
					</NavLink>
				</div>
			</header>
			<div className="welcomepage-language-toggle">
				<LanguageToggleButton />
			</div>
		</>
	)
}
