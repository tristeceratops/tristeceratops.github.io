import '../App.css'
import { useLanguage } from '../i18n/LanguageContext'
import githubLogo from '../assets/svg/github-logo.svg'
import mailLogo from '../assets/svg/mail-logo.svg'

export default function MainFooter() {

	const { t } = useLanguage()

	return (
		<footer className="site-footer">
			<h4>{t("develop")}</h4>
			<h4></h4>
			<div className="site-footer__links">
				<a
					href="https://github.com/tristeceratops"
					target="_blank"
					aria-label="GitHub"
					className="site-footer__link"
				>
					<img src={githubLogo} alt="GitHub" />
				</a>
				<a
					href="mailto:eric.woillard@gmail.com"
					aria-label="Email"
					className="site-footer__link"
				>
					<img src={mailLogo} alt="Email" />
				</a>
			</div>
		</footer>
	)
}