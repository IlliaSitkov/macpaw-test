import React from 'react';
import { Outlet } from 'react-router-dom';

import './Main.css';
import { MenuCard } from './components/MenuCard/MenuCard';

export const Main = () => {
	return (
		<div className='two-cols main'>
			<section className='menu'>
				<img draggable={false} src='/assets/images/img.png' alt='' />
				<h1>Hi intern!</h1>
				<p>Welcome to MI 2022 Front-end test</p>
				<p>Lets start using The Cat API</p>
				<nav className='flex-gap-10'>
					<MenuCard
						tabName='voting'
						cardType='voting'
						label='Voting'
						imgPath='/assets/images/voting.png'
					/>
					<MenuCard
						tabName='breeds'
						cardType='breeds'
						label='Breeds'
						imgPath='/assets/images/breeds.png'
					/>
					<MenuCard
						tabName='gallery'
						cardType='gallery'
						label='Gallery'
						imgPath='/assets/images/gallery.png'
					/>
				</nav>
			</section>
			<div />
			<section>
				<Outlet />
			</section>
		</div>
	);
};
