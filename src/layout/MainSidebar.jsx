import '../App.css'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageToggleButton from './LanguageToggleButton'

export default function MainSidebar({ isOpen, onClose }) {
	const { t } = useLanguage()

	return (
		<>
			<header className={`site-sidebar ${isOpen ? 'site-sidebar--open' : ''}`} aria-label="Primary navigation">
				<button
					className="sidebar-toggle-close"
					onClick={onClose}
					aria-label="Close sidebar"
				>
					✕
				</button>
				<div className="site-sidebar__buttons">
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
				<div className="site-sidebar__language-toggle">
					<LanguageToggleButton />
				</div>
			</header>
		</>
	)
}
