import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';

export const MainSection = () => {
	return (
		<div>
			<NavBar />
			<div style={{ marginTop: '1em' }}>
				<Outlet />
			</div>
		</div>
	);
};
