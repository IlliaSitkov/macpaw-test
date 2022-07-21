import React, { useEffect, useState } from 'react';
import './ImageVote.css';
import { Image } from '../../../../../../../common/Image/Image';
import { VoteControls } from './components/VoteControls/VoteControls';
import * as votingService from '../../../../../../../services/votingService';
import { LoadingSpinner } from '../../../../../../../common/LoadingSpinner/LoadingSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { getLoading } from '../../../../../../../store/selectors';
import { setLoading } from '../../../../../../../store/loading/actionCreators';

export const ImageVote = ({ reloadLogs }) => {
	const [image, setImage] = useState(null);

	const dispatch = useDispatch();

	const loading = useSelector(getLoading);

	useEffect(() => {
		loadImage();
	}, []);

	const loadImage = async () => {
		try {
			dispatch(setLoading(true));
			const res = await votingService.getRandomImage();
			if (res.status < 300) {
				const objs = await res.json();
				const obj = objs[0];
				console.log('fetched img: ', obj);
				setImage({ id: obj.id, url: obj.url });
			} else {
				alert(res.statusText);
			}
		} catch (e) {
			console.log(e);
		} finally {
			dispatch(setLoading(false));
		}
	};

	return (
		<div className='image-vote'>
			<LoadingSpinner loadingCondition={loading} />
			{!loading && image && (
				<>
					<Image alt='cat image' imgPath={image.url} />
					<div className='center'>
						<VoteControls
							reloadLogs={reloadLogs}
							imgId={image.id}
							loadNextImage={loadImage}
						/>
					</div>
				</>
			)}
		</div>
	);
};
