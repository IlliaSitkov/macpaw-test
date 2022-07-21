import React from 'react';
import './Message.css';

export const Message = ({ message, showCondition }) => {
	if (!showCondition) {
		return null;
	}

	return <div className='message border-r-sm'>{message}</div>;
};
