import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { MainImage } from './components/tabs/MainImage/MainImage';
import { MainSection } from './components/tabs/MainSection/MainSection';
import { Provider } from 'react-redux';
import { store } from './store';
import { Voting } from './components/tabs/MainSection/components/Voting/Voting';
import { Breeds } from './components/tabs/MainSection/components/Breeds/Breeds';
import { Breed } from './components/tabs/MainSection/components/Breed/Breed';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main />}>
						<Route index element={<MainImage />} />
						<Route path='main' element={<MainImage />} />
						<Route path='tabs' element={<MainSection />}>
							<Route index element={<Voting />} />
							<Route exact path='voting' element={<Voting />} />
							<Route exact path='breeds' element={<Breeds />} />
							<Route path='breeds/:breedId' element={<Breed />} />
						</Route>
					</Route>
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
