import React, { useEffect, useState } from 'react';
import { WorkPane } from '../../../../../common/WorkPane/WorkPane';
import { BackButton } from '../../../../../common/BackButton/BackButton';
import { TabLabel } from '../../../../../common/TabLabel/TabLabel';
import { GreySelect } from '../../../../../common/GreySelect/GreySlect';
import { onChangeHandler } from '../../../../../shared/utils';
import { SortButtonGroup } from '../../../../../common/SortButtonGroup/SortButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchBreeds,
	fetchBreedsByName,
} from '../../../../../store/breeds/thunk';
import { PaginationControls } from '../../../../../common/PaginationControls/PaginationControls';
import {
	getBreedNames,
	getBreeds,
	getLoading,
	getPaginationCount,
} from '../../../../../store/selectors';
import { ImageGallery } from '../../../../../common/ImageGallery/ImageGallery';
import { BreedCard } from './components/BreedCard/BreedCard';
import { fetchAllBreedNames } from '../../../../../store/breedNames/thunk';
import { LoadingSpinner } from '../../../../../common/LoadingSpinner/LoadingSpinner';

export const Breeds = () => {
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(0);
	const [breedName, setBreedName] = useState('');
	const [sortingOrder, setSortingOrder] = useState('Asc');

	const dispatch = useDispatch();
	const paginationCount = useSelector(getPaginationCount);
	const breeds = useSelector(getBreeds);
	const breedNames = useSelector(getBreedNames);
	const loading = useSelector(getLoading);

	useEffect(() => {
		if (breedName) {
			setBreedName('');
		} else {
			loadData();
		}
	}, [limit, page, sortingOrder]);

	useEffect(() => {
		loadBreedNames();
	}, []);

	useEffect(() => {
		loadBreedsByName();
	}, [breedName]);

	const loadBreedsByName = () => {
		if (breedName) {
			dispatch(fetchBreedsByName(breedName));
			setPage(0);
		} else {
			loadData();
		}
	};

	const loadBreedNames = () => {
		dispatch(fetchAllBreedNames);
	};

	const loadData = () => {
		dispatch(fetchBreeds(limit, page, sortingOrder));
	};

	const limitsData = [
		{ limit: 5 },
		{ limit: 10 },
		{ limit: 15 },
		{ limit: 20 },
	];

	return (
		<WorkPane white={true}>
			<PaginationControls
				limit={limit}
				page={page}
				pageSetter={setPage}
				paginationCount={paginationCount}
			>
				<div className='tab-header'>
					<BackButton />
					<TabLabel label='breeds' active={true} />
					<GreySelect
						id='breedId'
						optionNameFn={(d) => d.name}
						optionValueFn={(d) => d.name}
						value={breedName}
						onChange={(event) => {
							setPage(0);
							onChangeHandler(setBreedName)(event);
						}}
						width='100%'
						data={breedNames}
					>
						<option key={-1} value=''>
							All breeds
						</option>
					</GreySelect>
					<GreySelect
						onChange={(event) => {
							setPage(0);
							onChangeHandler(setLimit)(event);
						}}
						value={limit}
						data={limitsData}
						id='breedsLimit'
						optionValueFn={(d) => d.limit}
						optionNameFn={(d) => 'Limit: ' + d.limit}
					/>
					<SortButtonGroup
						currentValue={sortingOrder}
						name='sortingOrder'
						onChange={(event) => {
							setPage(0);
							onChangeHandler(setSortingOrder)(event);
						}}
					/>
				</div>
				<LoadingSpinner loadingCondition={loading} />
				{!loading && (
					<ImageGallery
						data={breeds}
						dataToComponentFn={(d) => <BreedCard breed={d} />}
					/>
				)}
			</PaginationControls>
		</WorkPane>
	);
};
