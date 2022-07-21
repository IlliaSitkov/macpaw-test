import React from 'react';
import './RadioButton.css';

export const RadioButton = ({ icon, name, onChange, value, currentValue }) => {
	return (
		<label
			className={`radio-btn ${
				currentValue === value ? 'radio-btn-checked' : ''
			}`}
		>
			{icon}
			<input value={value} name={name} onChange={onChange} type='radio' />
		</label>
	);
};
