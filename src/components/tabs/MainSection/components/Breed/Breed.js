import React, { useEffect, useState } from 'react';
import { WorkPane } from '../../../../../common/WorkPane/WorkPane';
import { BackButton } from '../../../../../common/BackButton/BackButton';
import { TabLabel } from '../../../../../common/TabLabel/TabLabel';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBreedNames } from '../../../../../store/selectors';
import { fetchAllBreedNames } from '../../../../../store/breedNames/thunk';
import { BreedInfo } from './components/BreedInfo/BreedInfo';
import { BreedGallery } from './components/BreedGallery/BreedGallery';

export const Breed = () => {
	const breedNames = useSelector(getBreedNames);
	const params = useParams();

	const dispatch = useDispatch();

	const [breed, setBreed] = useState(null);

	useEffect(() => {
		if (breedNames.length <= 0) {
			dispatch(fetchAllBreedNames);
		} else {
			setBreed(breedNames.find((b) => b.id === params.breedId));
		}
	}, [breedNames]);

	return (
		<WorkPane white={true}>
			<div className='tab-header'>
				<BackButton />
				<TabLabel label='breeds' active={false} />
				<TabLabel label={params.breedId} active={true} />
			</div>
			<BreedGallery breedId={params.breedId} imageQuantity={5} />
			{breed && <BreedInfo breed={breed} />}
		</WorkPane>
	);
};
