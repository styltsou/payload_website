import React from 'react';

import { cn } from '../../_utilities/cn';
import serialize from './serialize';
import classes from './index.module.scss';

const RichText: React.FC<{ className?: string; content: any }> = ({
	className,
	content,
}) => {
	if (!content) {
		return null;
	}

	return (
		<div className={cn(className, classes.richText)}>{serialize(content)}</div>
	);
};

export default RichText;
