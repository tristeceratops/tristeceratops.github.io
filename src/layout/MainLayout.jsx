import { Outlet } from 'react-router-dom'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'

export default function MainLayout() {
	return (
		<>
			<MainHeader />
			<Outlet />
			<MainFooter />
		</>
	)
}