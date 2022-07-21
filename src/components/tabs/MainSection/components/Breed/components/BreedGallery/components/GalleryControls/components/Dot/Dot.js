import React from 'react';
import './Dot.css';

export const Dot = ({ active, onClick }) => {
	return (
		<div onClick={onClick} className={`dot ${active ? 'active-dot' : ''}`} />
	);
};
