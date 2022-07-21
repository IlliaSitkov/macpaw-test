import React from 'react';

import './GreySelect.css';

export const GreySelect = ({
	width,
	value,
	id,
	data,
	optionNameFn,
	optionValueFn,
	children,
	onChange,
}) => {
	return (
		<select
			onChange={onChange}
			style={{ width: width }}
			className='grey-select border-light-pink-hover border-r-sm'
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
	);
};
