'use client';
import React, { useState, useEffect } from 'react';

import { useIntersect } from '../../../_hooks/useIntersect';
import { cn } from '../../../_utilities/cn';

import classes from './index.module.scss';

type AnimationState = {
	animateWordIn: boolean;
	animateWordOut: boolean;
};

const intersectionOptions = {
	rootMargin: '0% 0% -25% 0%',
	threshold: [0, 0.5, 1.0],
};

const initialAnimationState = {
	animateWordIn: false,
	animateWordOut: false,
};

export const RedUnderline: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [animationState, setAnimationState] = useState<AnimationState>(
		initialAnimationState,
	);
	const [hasAnimated, setHasAnimated] = useState(false);

	const [intersectionRef, entry] = useIntersect(intersectionOptions);

	useEffect(() => {
		const animationTimeout = setTimeout(() => {
			setAnimationState({
				animateWordIn: false,
				animateWordOut: false,
			});
		}, 800);

		if (entry?.isIntersecting) {
			setAnimationState({
				animateWordIn: true,
				animateWordOut: false,
			});
			setHasAnimated(true);
			clearTimeout(animationTimeout);
		} else if (hasAnimated) {
			setAnimationState({
				animateWordOut: true,
				animateWordIn: false,
			});
		}

		return () => {
			clearTimeout(animationTimeout);
		};
	}, [entry, hasAnimated]);

	return (
		<span
			ref={intersectionRef}
			className={cn(
				classes.redUnderline,
				animationState.animateWordIn && classes.animateWordIn,
				animationState.animateWordOut && classes.animateWordOut,
			)}
		>
			{children}
		</span>
	);
};
