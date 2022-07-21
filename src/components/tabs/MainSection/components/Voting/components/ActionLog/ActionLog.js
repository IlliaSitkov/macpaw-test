import React from 'react';
import './ActionLog.css';
import { Smile } from '../../../../../../../common/icons/Smile';
import { Sad } from '../../../../../../../common/icons/Sad';
import { HeartOutline } from '../../../../../../../common/icons/HeartOutline';

export const ActionLog = ({ log }) => {
	const time = new Date(log.created_at)
		.toLocaleTimeString()
		.replaceAll(/:\d+$/gi, '');
	let category;
	let icon;
	let style;
	if (log.value !== undefined) {
		if (log.value === 1) {
			category = 'Likes';
			icon = <Smile size={20} />;
			style = 'smile';
		} else {
			category = 'Dislikes';
			icon = <Sad size={20} />;
			style = 'sad';
		}
	} else {
		category = 'Favourites';
		icon = <HeartOutline size={20} />;
		style = 'favourite';
	}

	return (
		<div className='action-log border-r-sm'>
			<div className='info-block'>
				<div className='time'>{time}</div>
				<div>
					Image ID: <span>{log.image_id}</span> was added to {category}
				</div>
			</div>
			<div className={style}>{icon}</div>
		</div>
	);
};
