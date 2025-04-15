import LandingPage from '@/pages/landing-page';
import LoginPage from '@/pages/login-page';
import SignUpPage from '@/pages/signup-page';
import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from '../pages/home-page';
import { ThemeProvider } from './providers/theme-provider';
import '/src/app/index.css';

function App() {
	return (
		<StrictMode>
			<ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
				<BrowserRouter basename={import.meta.env.BASE_URL}>
					<Routes>
						<Route path='/' element={<LandingPage />} />
						<Route path='/workspace' element={<HomePage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/signup' element={<SignUpPage />} />
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</StrictMode>
	);
}

export default App;
