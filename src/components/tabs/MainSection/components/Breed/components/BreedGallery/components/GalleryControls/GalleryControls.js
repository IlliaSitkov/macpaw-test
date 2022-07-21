import React from 'react';
import './GalleryControls.css';
import { Dot } from './components/Dot/Dot';

export const GalleryControls = ({ currentIndex, setIndex, elemQuantity }) => {
	const makeDots = () => {
		const dots = [];
		for (let i = 0; i < elemQuantity; i++) {
			dots.push(
				<div key={i}>
					<Dot active={currentIndex === i} onClick={() => setIndex(i)} />
				</div>
			);
		}
		return dots;
	};

	return <div className='gallery-controls border-r-lg'>{makeDots()}</div>;
};
