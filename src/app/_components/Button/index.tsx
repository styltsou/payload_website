'use client';

import React, { ElementType } from 'react';
import Link from 'next/link';

import classes from './index.module.scss';

export type Props = {
	appearance?: 'default' | 'primary' | 'secondary' | 'none';
	el?: 'button' | 'link' | 'a';
	onClick?: () => void;
	href?: string;
	newTab?: boolean;
	className?: string;
	type?: 'submit' | 'button';
	disabled?: boolean;
	inverted?: boolean;
	children?: React.ReactNode;
};

export const Button: React.FC<Props> = ({
	el: elFromProps = 'link',
	newTab,
	href,
	appearance,
	className: classNameFromProps,
	onClick,
	type = 'button',
	disabled,
	inverted = false,
	children,
}) => {
	let el = elFromProps;

	const newTabProps = newTab
		? { target: '_blank', rel: 'noopener noreferrer' }
		: {};

	const className = [
		classes.button,
		classNameFromProps,
		inverted
			? classes[`${appearance}--invert`]
			: classes[`appearance--${appearance}`],
	]
		.filter(Boolean)
		.join(' ');

	const content = (
		<div className={classes.content}>
			<span className={classes.label}>{children}</span>
		</div>
	);

	if (onClick || type === 'submit') el = 'button';

	if (el === 'link') {
		return (
			<Link
				href={href || ''}
				className={className}
				{...newTabProps}
				onClick={onClick}
			>
				{content}
			</Link>
		);
	}

	const Element: ElementType = el;

	return (
		<Element
			href={href}
			className={className}
			type={type}
			{...newTabProps}
			onClick={onClick}
			disabled={disabled}
		>
			{content}
		</Element>
	);
};
