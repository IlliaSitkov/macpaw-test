import React from 'react';
import './IconMessage.css';

export const IconMessage = ({ message, icon, showCondition }) => {
	if (!showCondition) {
		return null;
	}

	return (
		<div className='icon-message border-r-sm flex-gap-10'>
			{icon} <div>{message}</div>
		</div>
	);
};
