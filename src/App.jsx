import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import AboutPage from './WelcomePage/AboutPageComponent'
import ProjectsPage from './WelcomePage/ProjectsPageComponent'
import ResumePage from './WelcomePage/ResumePageComponent'
import WelcomePage from './WelcomePage/WelcomePageComponent'

function App() {

  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </HashRouter>
    </LanguageProvider>
  )
}
export default App
