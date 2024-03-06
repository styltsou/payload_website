import React from 'react';
import { cn } from '../../../_utilities/cn';
import classes from './index.module.scss';

interface Props {
	className?: string;
	left?: boolean;
	right?: boolean;
	children: React.ReactNode;
}

export const Gutter: React.FC<Props> = ({
	className,
	left = false,
	right = false,
	children,
}) => {
	return (
		<div
			className={cn(className, left && classes.left, right && classes.right)}
		>
			{children}
		</div>
	);
};
