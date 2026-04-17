import '../App.css'
import { useLanguage } from '../i18n/LanguageContext'

export default function MainFooter() {

	const { t } = useLanguage()

	return (
		<footer className="page-footer">
			<h4>{t("develop")}</h4>
			<h4></h4>
			<div className='footer-links'>
				<a><h4>github</h4></a>
				<a><h4>mail</h4></a>
				<a><h4>discord</h4></a>
			</div>
		</footer>
	)
}