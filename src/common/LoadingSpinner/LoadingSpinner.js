import React from 'react';
import './LoadingSpinner.css';

export const LoadingSpinner = ({ loadingCondition }) => {
	if (!loadingCondition) {
		return null;
	}
	return <div className='loader' />;
};
