import React, { useEffect, useState } from 'react';
import { WorkPane } from '../../../../../common/WorkPane/WorkPane';
import { BackButton } from '../../../../../common/BackButton/BackButton';
import { TabLabel } from '../../../../../common/TabLabel/TabLabel';
import { ImageVote } from './components/ImageVote/ImageVote';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActionLogs } from '../../../../../store/actionLogs/thunk';
import {
	getActionLogs,
	getPaginationCount,
} from '../../../../../store/selectors';
import { PaginationControls } from '../../../../../common/PaginationControls/PaginationControls';
import { fetchAllFavourites } from '../../../../../store/favourites/thunk';
import { ActionLogsList } from '../../../../../common/ActionLogsList/ActionLogsList';

export const Voting = () => {
	const [page, setPage] = useState(0);

	const dispatch = useDispatch();
	const paginationCount = useSelector(getPaginationCount);

	const limit = 4;

	const actionLogs = useSelector(getActionLogs);

	useEffect(() => {
		dispatch(fetchAllFavourites);
	}, []);

	useEffect(() => {
		loadActionLogs();
	}, [page]);

	const loadActionLogs = () => {
		dispatch(fetchActionLogs(limit, page));
	};

	return (
		<WorkPane white={true}>
			<div className='tab-header'>
				<BackButton />
				<TabLabel label='voting' active={true} />
			</div>
			<ImageVote reloadLogs={loadActionLogs} />
			<ActionLogsList actionLogs={actionLogs} />
			<PaginationControls
				limit={limit}
				page={page}
				pageSetter={setPage}
				paginationCount={paginationCount}
			/>
		</WorkPane>
	);
};
