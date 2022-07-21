import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { MainImage } from './components/tabs/MainImage/MainImage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />}>
					<Route index element={<MainImage />} />
					<Route path='main' element={<MainImage />} />
				</Route>
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
