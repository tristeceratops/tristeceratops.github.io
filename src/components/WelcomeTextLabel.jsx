import { useLanguage } from '../i18n/LanguageContext'

export default function WelcomeTextLabel({ textKey }) {
	const { t } = useLanguage()

	return <h1 className="welcome-text-label" data-text={t(textKey)}>{t(textKey)}</h1>
}
