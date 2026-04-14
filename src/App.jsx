import './App.css'
import { LanguageProvider } from './i18n/LanguageContext'
import WelcomePage from './WelcomePage/WelcomePageComponent'

function App() {

  return (
  <LanguageProvider>
    <WelcomePage/>
  </LanguageProvider>
  )
}
export default App
