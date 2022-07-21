import React from 'react';

import { RadioButton } from './components/RadioButton/RadioButton';
import { SortDescending } from '../icons/SortDescending';
import { SortAscending } from '../icons/SortAscending';

export const SortButtonGroup = ({ name, onChange, currentValue }) => {
	return (
		<div className='flex-gap-10'>
			<RadioButton
				currentValue={currentValue}
				value='Desc'
				name={name}
				onChange={onChange}
				icon={<SortDescending />}
			/>
			<RadioButton
				currentValue={currentValue}
				value='Asc'
				name={name}
				onChange={onChange}
				icon={<SortAscending />}
			/>
		</div>
	);
};
