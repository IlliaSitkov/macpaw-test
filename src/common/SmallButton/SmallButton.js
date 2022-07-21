import React from 'react';
import './SmallButton.css';

export const SmallButton = ({ children, white, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`small-btn background-pink-hover border-r-sm ${
				white ? 'white-btn' : 'pink-btn'
			}`}
		>
			{children}
		</button>
	);
};
