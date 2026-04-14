import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageToggleButton() {
  const { nextLanguageLabel, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      className="language-toggle-button"
      onClick={toggleLanguage}
      aria-label={nextLanguageLabel}
    >
      {nextLanguageLabel}
    </button>
  )
}
