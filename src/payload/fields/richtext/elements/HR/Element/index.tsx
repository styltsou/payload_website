import React from 'react';
import { styles } from '../baseStyles';

const ButtonElement: React.FC<{
	attributes: any;
	element: any;
	children: any;
}> = ({ attributes, children, element }) => (
	<div contentEditable={false}>
		<span {...attributes} style={styles}>
			<hr style={styles} />
			{children}
		</span>
	</div>
);
export default ButtonElement;
