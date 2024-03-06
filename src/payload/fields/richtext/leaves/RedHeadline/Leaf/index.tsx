import React from 'react';
import { colors } from '../../../../../../app/cssVariables';

const RedHeadline: React.FC<any> = ({ attributes, children }) => {
	return (
		<span
			{...attributes}
			style={{
				color: colors.red,
				textTransform: 'uppercase',
			}}
		>
			{children}
		</span>
	);
};

export default RedHeadline;
