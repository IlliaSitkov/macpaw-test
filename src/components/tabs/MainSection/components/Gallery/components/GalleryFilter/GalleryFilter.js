import React from 'react';
import { WhiteSelect } from '../../../../../../../common/WhiteSelect/WhiteSelect';
import { onChangeHandler } from '../../../../../../../shared/utils';
import { ReloadButton } from '../../../../../../../common/ReloadButton/ReloadButton';
import { useSelector } from 'react-redux';
import { getBreedNames } from '../../../../../../../store/selectors';

export const GalleryFilter = ({
	reloadImagesFn,
	order,
	orderSetter,
	type,
	typeSetter,
	breedId,
	breedIdSetter,
	limit,
	limitSetter,
}) => {
	const breedNames = useSelector(getBreedNames);

	const limitsData = [
		{ limit: 5 },
		{ limit: 10 },
		{ limit: 15 },
		{ limit: 20 },
	];

	const typesData = [
		{ name: 'All', val: 'jpg,png,gif' },
		{ name: 'Static', val: 'jpg,png' },
		{ name: 'Animated', val: 'gif' },
	];

	const orderData = [
		{ name: 'Random', val: 'Rand' },
		{ name: 'Desc', val: 'Desc' },
		{ name: 'Asc', val: 'Asc' },
	];

	return (
		<div className='gallery-filter'>
			<WhiteSelect
				id='itemsOrder'
				onChange={onChangeHandler(orderSetter)}
				data={orderData}
				value={order}
				label='order'
				optionValueFn={(d) => d.val}
				optionNameFn={(d) => d.name}
			/>
			<WhiteSelect
				id='imgType'
				optionNameFn={(d) => d.name}
				optionValueFn={(d) => d.val}
				data={typesData}
				value={type}
				onChange={onChangeHandler(typeSetter)}
				label='type'
			/>
			<WhiteSelect
				label='breed'
				id='breedId'
				optionNameFn={(d) => d.name}
				optionValueFn={(d) => d.id}
				value={breedId}
				onChange={onChangeHandler(breedIdSetter)}
				data={breedNames}
			>
				<option key={-1} value=''>
					None
				</option>
			</WhiteSelect>
			<div
				style={{
					display: 'flex',
					gap: '10px',
					alignItems: 'end',
				}}
			>
				<WhiteSelect
					width='100%'
					data={limitsData}
					optionValueFn={(d) => d.limit}
					optionNameFn={(d) => d.limit + ' items per page'}
					label='limit'
					onChange={onChangeHandler(limitSetter)}
					value={limit}
					id='itemsLimit'
				/>
				<ReloadButton onClick={reloadImagesFn} />
			</div>
		</div>
	);
};
