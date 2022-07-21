import React from 'react';
import './TabLabel.css';

export const TabLabel = ({ label, active }) => {
	return (
		<div
			className={`tab-label border-r-sm ${active ? 'active-tab-label' : ''}`}
		>
			{label}
		</div>
	);
};
