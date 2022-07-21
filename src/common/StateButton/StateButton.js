import React from 'react';
import './StateButton.css';

export const StateButton = ({
	onClick,
	disabled,
	children,
	label,
	iconLeft,
}) => {
	return (
		<button
			className='state-btn border-r-sm flex-gap-10'
			onClick={onClick}
			disabled={disabled}
		>
			{iconLeft ? (
				<>
					{children} {label}
				</>
			) : (
				<>
					{label} {children}
				</>
			)}
		</button>
	);
};
