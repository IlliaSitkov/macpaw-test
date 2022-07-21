import React from 'react';

import './WhiteSelect.css';

export const WhiteSelect = ({
	width,
	value,
	id,
	data,
	optionNameFn,
	optionValueFn,
	children,
	onChange,
	label,
}) => {
	return (
		<div style={{ width: width }} className='white-select'>
			<label htmlFor={id}>{label}</label>
			<select
				className='border-r-sm border-light-pink-hover'
				onChange={onChange}
				id={id}
				value={value}
			>
				{children}
				{data.map((d) => {
					const id = optionValueFn(d);
					return (
						<option value={id} key={id}>
							{optionNameFn(d)}
						</option>
					);
				})}
			</select>
		</div>
	);
};
