import React from 'react';
import './VoteControls.css';
import { Smile } from '../../../../../../../../../common/icons/Smile';
import { HeartOutline } from '../../../../../../../../../common/icons/HeartOutline';
import { Sad } from '../../../../../../../../../common/icons/Sad';
import * as votingService from '../../../../../../../../../services/votingService';
import { HeartFilled } from '../../../../../../../../../common/icons/HeartFilled';
import { useFavourite } from '../../../../../../../../../shared/hooks/useFavourite';

export const VoteControls = ({ imgId, loadNextImage, reloadLogs }) => {
	const [favourite, favClicked] = useFavourite(imgId);

	const vote = (voteValue) => async () => {
		console.log('voting: ' + voteValue);
		try {
			const res = await votingService.vote(voteValue, imgId);
			if (res.status < 300) {
				loadNextImage();
				reloadLogs();
			} else {
				alert(res.statusText);
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className='vote-controls border-r-lg'>
			<button onClick={vote(1)} className='like-vote'>
				<Smile size={30} />
			</button>
			<button onClick={favClicked} className='fav-vote'>
				{favourite ? <HeartFilled size={30} /> : <HeartOutline size={30} />}
			</button>
			<button onClick={vote(0)} className='dislike-vote'>
				<Sad size={30} />
			</button>
		</div>
	);
};
