import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MainSidebar from './MainSidebar'
import MainFooter from './MainFooter'

export default function MainLayout() {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	return (
		<div className="main-layout">
			<button
				className={`sidebar-toggle-open ${sidebarOpen ? 'sidebar-toggle-open--hidden' : ''}`}
				onClick={() => setSidebarOpen(true)}
				aria-label="Open sidebar"
			>
				☰
			</button>
			<MainSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
			<div className={`outlet-wrapper ${sidebarOpen ? 'outlet-wrapper--sidebar-open' : ''}`}>
				<Outlet />
			</div>
			<MainFooter />
		</div>
	)
}