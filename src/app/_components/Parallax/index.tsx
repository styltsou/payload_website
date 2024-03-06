'use client';

import classes from './index.module.scss';

import React, { useRef, useEffect, useState } from 'react';
import { useScrollInfo } from '@faceless-ui/scroll-info';
import { useWindowInfo } from '@faceless-ui/window-info';
import { cn } from '../../_utilities/cn';

type ParallaxProps = {
	className?: string;
	yDistance?: number;
	htmlElement?: React.ElementType;
	style?: React.CSSProperties;
	children?: React.ReactNode;
};

export const Parallax: React.FC<ParallaxProps> = props => {
	const {
		htmlElement: HtmlElement = 'div',
		children,
		yDistance = 50,
		className,
		style,
	} = props;

	const ref = useRef(null);
	const { current: node } = ref;

	const windowInfo = useWindowInfo();
	const scrollInfo = useScrollInfo();

	const scrollYPos = scrollInfo ? scrollInfo.y : 0;
	const windowHeight = windowInfo ? windowInfo.height : 0;

	const [localWindowHeight, setLocalWindowHeight] = useState<number>(0);
	const [translateY, setTranslateY] = useState(0);

	useEffect(() => {
		setLocalWindowHeight(windowHeight);
	}, [windowInfo]);

	useEffect(() => {
		if (node) {
			const { y: nodeYPos, height: nodeHeight } = node.getBoundingClientRect();
			const isNotAboveViewport = nodeYPos + nodeHeight > 0;
			const isNotBelowViewport = localWindowHeight - nodeYPos > -1000;

			if (isNotAboveViewport && isNotBelowViewport) {
				const percentOfWindowTraveled = nodeYPos / localWindowHeight;
				setTranslateY(percentOfWindowTraveled * yDistance);
			}
		}
	}, [node, scrollYPos, yDistance, localWindowHeight]);

	useEffect(() => {
		const sizeDifference = 200;
		if (
			windowHeight > localWindowHeight + sizeDifference ||
			windowHeight < localWindowHeight - sizeDifference
		) {
			setLocalWindowHeight(windowHeight);
		}
	}, [localWindowHeight, windowHeight]);

	const combinedStyles = {
		...style,
		transform: `translate3d(0, ${translateY}px, 0)`,
	};

	return (
		<HtmlElement
			ref={ref}
			className={cn(classes.parallax, className)}
			style={combinedStyles}
		>
			{children}
		</HtmlElement>
	);
};

export default Parallax;
