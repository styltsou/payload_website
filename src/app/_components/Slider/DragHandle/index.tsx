'use client';

import { useState, useEffect } from 'react';
import { useMouseInfo } from '@faceless-ui/mouse-info';
import { cn } from '../../../_utilities/cn';

import classes from './index.module.scss';

export const DragHandle: React.FC<{ show?: boolean }> = ({ show = false }) => {
	const mouseInfo = useMouseInfo();
	const [savedPosition, setSavedPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		if (show) {
			setSavedPosition({ x: mouseInfo.x, y: mouseInfo.y });
		}
	}, [show, mouseInfo]);

	return (
		<div className={cn(show && classes.showHandle, classes.handleContainer)}>
			<div
				className={cn(classes.handle, 'label')}
				style={
					show
						? { left: mouseInfo.x, top: mouseInfo.y - 8 }
						: { left: savedPosition.x, top: savedPosition.y }
				}
			>
				Drag Me
			</div>
		</div>
	);
};
