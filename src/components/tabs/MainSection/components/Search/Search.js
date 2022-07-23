import React, { useEffect } from 'react';
import { WorkPane } from '../../../../../common/WorkPane/WorkPane';
import { BackButton } from '../../../../../common/BackButton/BackButton';
import { TabLabel } from '../../../../../common/TabLabel/TabLabel';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBreeds, getLoading } from '../../../../../store/selectors';
import { fetchBreedsByName } from '../../../../../store/breeds/thunk';
import { LoadingSpinner } from '../../../../../common/LoadingSpinner/LoadingSpinner';
import { ImageGallery } from '../../../../../common/ImageGallery/ImageGallery';
import { BreedCard } from '../Breeds/components/BreedCard/BreedCard';
import { Message } from '../../../../../common/Message/Message';
import './Search.css';

export const Search = () => {
	const [searchParams] = useSearchParams();

	const searchString = searchParams.get('q');

	const breeds = useSelector(getBreeds);
	const loading = useSelector(getLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('search: ' + searchParams.get('q'));
		dispatch(fetchBreedsByName(searchParams.get('q')));
	}, [searchString]);

	return (
		<WorkPane white={true}>
			<div className='pane-content'>
				<div className='tab-header'>
					<BackButton />
					<TabLabel label='search' active={true} />
				</div>
				<div className='query'>
					Search results for: <span>{searchParams.get('q')}</span>
				</div>
				<LoadingSpinner loadingCondition={loading} />
				<Message
					message='No item found'
					showCondition={!loading && breeds.length <= 0}
				/>
				{!loading && (
					<>
						<ImageGallery
							data={breeds}
							dataToComponentFn={(d) => <BreedCard breed={d} />}
						/>
					</>
				)}
			</div>
		</WorkPane>
	);
};
