import React from 'react';
import { ActionLog } from './components/ActionLog/ActionLog';
import './ActionLogsList.css';

export const ActionLogsList = ({ actionLogs }) => {
	return (
		<div className='logs-list'>
			{actionLogs.map((a) => (
				<div key={a.id}>
					<ActionLog log={a} />
				</div>
			))}
		</div>
	);
};
