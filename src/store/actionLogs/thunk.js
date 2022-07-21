import * as votingService from '../../services/votingService';
import { addActionLogs } from './actionCreators';
import { setPaginationCount } from '../pagination/actionCreators';

export const fetchActionLogs = (limit, page) => async (dispatch) => {
	console.log('loading logs');
	try {
		const resVotes = await votingService.getVotes(limit, page);
		if (resVotes.status < 300) {
			const obj = await resVotes.json();
			dispatch(setPaginationCount(resVotes.headers.get('pagination-count')));
			dispatch(addActionLogs(obj));
		} else {
			alert(resVotes.statusText);
		}
	} catch (e) {
		console.log(e);
	}
};
