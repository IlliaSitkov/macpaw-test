import React from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { NavButton } from '../../../../../common/NavButton/NavButton';

import './NavBar.css';
import { Smile } from '../../../../../common/icons/Smile';
import { HeartOutline } from '../../../../../common/icons/HeartOutline';
import { Sad } from '../../../../../common/icons/Sad';

export const NavBar = () => {
	return (
		<div className='section-navbar'>
			<SearchBar />
			<NavButton tabName='likes'>
				<Smile size={30} />
			</NavButton>

			<NavButton tabName='favourites'>
				<HeartOutline size={30} />
			</NavButton>

			<NavButton tabName='dislikes'>
				<Sad size={30} />
			</NavButton>
		</div>
	);
};
