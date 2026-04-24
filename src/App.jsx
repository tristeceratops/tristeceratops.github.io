import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import MainLayout from './layout/MainLayout'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ResumePage from './pages/ResumePage'

function App() {

  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Route>
        </Routes>
      </HashRouter>
    </LanguageProvider>
  )
}
export default App
