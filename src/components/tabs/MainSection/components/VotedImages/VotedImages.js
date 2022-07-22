import React, { useEffect, useState } from 'react';
import { BackButton } from '../../../../../common/BackButton/BackButton';
import { TabLabel } from '../../../../../common/TabLabel/TabLabel';
import * as votingService from '../../../../../services/votingService';
import { ImageGallery } from '../../../../../common/ImageGallery/ImageGallery';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../../../../store/loading/actionCreators';
import { SimpleCard } from '../../../../../common/SimpleCard/SimpleCard';
import { WorkPane } from '../../../../../common/WorkPane/WorkPane';
import { getLoading } from '../../../../../store/selectors';
import { LoadingSpinner } from '../../../../../common/LoadingSpinner/LoadingSpinner';
import { Message } from '../../../../../common/Message/Message';

export const VotedImages = ({ voteValue, tabName }) => {
	const [votes, setVotes] = useState([]);

	const dispatch = useDispatch();
	const loading = useSelector(getLoading);

	useEffect(() => {
		console.log('voted images');
		dispatch(setLoading(true));
		votingService.getAllVotesOfTypeWithImage(voteValue, setVotes).then(() => {
			dispatch(setLoading(false));
		});
	}, [voteValue]);

	return (
		<WorkPane white={true}>
			<div className='tab-header'>
				<BackButton />
				<TabLabel label={tabName} active={true} />
			</div>
			<LoadingSpinner loadingCondition={loading} />
			<Message
				message='No item found'
				showCondition={!loading && votes.length <= 0}
			/>
			{!loading && (
				<ImageGallery
					data={votes}
					dataToComponentFn={(d) => (
						<SimpleCard imgUrl={d.url} alt={d.image_id} />
					)}
				/>
			)}
		</WorkPane>
	);
};
