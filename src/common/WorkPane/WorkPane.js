import React from 'react';

import './WorkPane.css';

export const WorkPane = ({ white, children }) => {
	return (
		<div className={`work-pane border-r-lg ${white ? 'white' : 'pink'}`}>
			{children}
		</div>
	);
};
