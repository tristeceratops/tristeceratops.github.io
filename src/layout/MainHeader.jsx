import '../App.css'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageToggleButton from './LanguageToggleButton'

export default function MainHeader() {
	const { t } = useLanguage()

	return (
		<>
			<header className="site-header" aria-label="Primary navigation">
				<div className="site-header__buttons">
					<NavLink
						to="/"
						end
						className={({ isActive }) =>
							`nav-button ${isActive ? 'nav-button--active' : ''}`.trim()
						}
					>
						{t('home')}
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							`nav-button ${isActive ? 'nav-button--active' : ''}`.trim()
						}
					>
						{t('about')}
					</NavLink>
					<NavLink
						to="/projects"
						className={({ isActive }) =>
							`nav-button ${isActive ? 'nav-button--active' : ''}`.trim()
						}
					>
						{t('projects')}
					</NavLink>
					<NavLink
						to="/resume"
						className={({ isActive }) =>
							`nav-button ${isActive ? 'nav-button--active' : ''}`.trim()
						}
					>
						{t('resume')}
					</NavLink>
				</div>
			</header>
			<div className="site-language-toggle">
				<LanguageToggleButton />
			</div>
		</>
	)
}
