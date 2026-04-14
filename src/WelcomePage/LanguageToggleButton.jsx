import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageToggleButton() {
  const { nextLanguageLabel, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      className="main-button-style"
      onClick={toggleLanguage}
      aria-label={nextLanguageLabel}
    >
      {nextLanguageLabel}
    </button>
  )
}
