import React from 'react';
import { StateButton } from '../StateButton/StateButton';
import './PaginationControls.css';
import { ArrowRightSmall } from '../icons/ArrowRightSmall';
import { ArrowLeftSmall } from '../icons/ArrowLeftSmall';

export const PaginationControls = ({
	limit,
	page,
	pageSetter,
	paginationCount,
}) => {
	console.log('pagination controls page: ' + page);
	return (
		<div className='pagination-controls'>
			<StateButton
				onClick={() => pageSetter(page - 1)}
				disabled={page === 0}
				iconLeft={true}
				label='Prev'
			>
				<ArrowLeftSmall />
			</StateButton>
			<StateButton
				onClick={() => pageSetter(page + 1)}
				disabled={limit * (page + 1) >= paginationCount}
				label='Next'
			>
				<ArrowRightSmall />
			</StateButton>
		</div>
	);
};
