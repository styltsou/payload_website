import React from 'react';

import classes from './index.module.scss';
import { cn } from '../../_utilities/cn';

type Props = {
	color: 'none' | 'red' | 'blue' | 'orange' | 'gray';
	className?: string;
	children?: React.ReactNode;
};

export const BackgroundColor: React.FC<Props> = ({
	className,
	color,
	children,
}) => {
	return (
		<div
			className={cn(
				className,
				color !== 'none' && classes[`background-${color}`],
			)}
		>
			{children}
		</div>
	);
};
