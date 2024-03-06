import React from 'react';
import { cn } from '../../../_utilities/cn';
import classes from './index.module.scss';

interface GridContainerProps {
	className?: string;
	children: React.ReactNode;
}

export const GridContainer: React.FC<GridContainerProps> = ({
	className,
	children,
}) => {
	return <div className={cn(classes.gridContainer, className)}>{children}</div>;
};
