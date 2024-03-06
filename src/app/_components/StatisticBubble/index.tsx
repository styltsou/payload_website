'use client';
import { useState, useEffect } from 'react';
import { useIntersect } from '../../_hooks/useIntersect';
import { cn } from '../../_utilities/cn';
import classes from './index.module.scss';

export const StatisticBubble: React.FC<{
	stat: string;
	description: string;
}> = ({ stat, description }) => {
	const [intersectionRef, entry] = useIntersect({ threshold: 0.2 });
	const [hasRendered, setHasRendered] = useState(false);

	const isIntersecting = Boolean(entry?.isIntersecting);
	const isAboveViewport = entry?.boundingClientRect?.top < 0;

	const shouldRender = isIntersecting || isAboveViewport;

	useEffect(() => {
		if (shouldRender && !hasRendered) setHasRendered(true);
	}, [shouldRender, hasRendered]);

	return (
		<div
			ref={intersectionRef}
			className={cn(classes.wrapper, hasRendered && classes.hasRendered)}
		>
			<div>{stat}</div>
			<div>{description}</div>
		</div>
	);
};
