import React, { useEffect, useState } from 'react';
import { WorkPane } from '../../../../../common/WorkPane/WorkPane';
import { BackButton } from '../../../../../common/BackButton/BackButton';
import { TabLabel } from '../../../../../common/TabLabel/TabLabel';
import { ImageGallery } from '../../../../../common/ImageGallery/ImageGallery';
import { GalleryCard } from '../Gallery/components/GalleryCard/GalleryCard';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../../../../store/loading/actionCreators';
import * as votingService from '../../../../../services/votingService';
import { getLoading } from '../../../../../store/selectors';
import { PaginationControls } from '../../../../../common/PaginationControls/PaginationControls';
import { LoadingSpinner } from '../../../../../common/LoadingSpinner/LoadingSpinner';
import { Message } from '../../../../../common/Message/Message';
import { ActionLogsList } from '../../../../../common/ActionLogsList/ActionLogsList';

export const Favourites = () => {
	const [favourites, setFavourites] = useState([]);
	const [limit] = useState(5);
	const [page, setPage] = useState(0);
	const [paginationCount, setPaginationCount] = useState(10);

	const dispatch = useDispatch();
	const loading = useSelector(getLoading);

	useEffect(() => {
		loadData();
	}, [page]);

	const loadData = async () => {
		dispatch(setLoading(true));
		try {
			const res = await votingService.getFavourites(limit, page);
			if (res.status < 300) {
				const favs = await res.json();
				for (let f of favs) {
					await votingService.getImageForVote(f);
				}
				setFavourites(favs);
				setPaginationCount(+res.headers.get('pagination-count'));
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
		<WorkPane white={true}>
			<div className='tab-header'>
				<BackButton />
				<TabLabel label='favourites' active={true} />
			</div>
			<LoadingSpinner loadingCondition={loading} />
			<Message
				message='No item found'
				showCondition={!loading && favourites.length <= 0}
			/>
			{!loading && favourites.length > 0 && (
				<>
					<ImageGallery
						data={favourites}
						dataToComponentFn={(d) => (
							<GalleryCard imageId={d.image_id} imageUrl={d.url} />
						)}
					/>
					<div style={{ marginTop: '40px' }}>
						<ActionLogsList actionLogs={favourites} />
					</div>
					<PaginationControls
						limit={limit}
						page={page}
						pageSetter={setPage}
						paginationCount={paginationCount}
					/>
				</>
			)}
		</WorkPane>
	);
};
