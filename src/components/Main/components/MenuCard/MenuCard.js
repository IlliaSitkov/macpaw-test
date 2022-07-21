import React from 'react';

import './MenuCard.css';
import { NavLink } from 'react-router-dom';

export const MenuCard = ({ label, imgPath, cardType, tabName }) => {
	return (
		<NavLink
			className={({ isActive }) => `menu-card ${isActive ? 'active' : ''}`}
			to={`tabs/${tabName}`}
		>
			<div className={`menu-card-img border-r-lg ${cardType}`}>
				<img src={imgPath} alt={label} />
			</div>
			<div className='center-div'>
				<div className='menu-card-label border-r-sm'>{label}</div>
			</div>
		</NavLink>
	);
};
