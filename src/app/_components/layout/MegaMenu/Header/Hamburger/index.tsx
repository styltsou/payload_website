import React from 'react';
import classes from './index.module.scss';
import { cn } from '../../../../../_utilities/cn';

interface Props {
	isActive: boolean;
}

export const Hamburger: React.FC<Props> = ({ isActive }) => {
	return (
		<div className={cn(classes.burger, isActive && classes.active)}>
			<span className={classes.dash}></span>
			<span className={classes.dash}></span>
			<span className={classes.dash}></span>
			<span className={classes.dash}></span>
		</div>
	);
};
