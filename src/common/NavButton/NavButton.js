import React, { useState } from 'react';

import './NavButton.css';
import { NavLink } from 'react-router-dom';

export const NavButton = ({ children, tabName }) => {
	const [active, setActive] = useState(false);

	const setActiveLink = ({ isActive }) => {
		setActive(isActive);
		return '';
	};

	return (
		<NavLink to={`/tabs/${tabName}`} className={setActiveLink}>
			<button className={`nav-btn border-r-lg ${active ? 'active-btn' : ''}`}>
				{children}
			</button>
		</NavLink>
	);
};
