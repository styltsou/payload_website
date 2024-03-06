import React from 'react';
import { colors } from '../../../../../../app/cssVariables';

const RedUnderline = ({ attributes, children }) => {
	return (
		<span
			{...attributes}
			style={{
				textDecoration: 'underline',
				color: colors.red,
			}}
		>
			{children}
		</span>
	);
};

export default RedUnderline;
