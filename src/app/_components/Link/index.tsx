import React from 'react';
import Link from 'next/link';

import { Page } from '../../../payload/payload-types';
import { Button, Props as ButtonProps } from '../Button';

interface CustomLinkProps {
	id?: string | null;
	label: string;
	type?: ('reference' | 'custom') | null;
	url?: string | null;
	newTab?: boolean | null;
	reference?: {
		relationTo: 'pages';
		value: number | Page;
	} | null;
	appearance?: ('default' | 'primary' | 'secondary') | null;
	children?: React.ReactNode;
	className?: string;
	inverted?: boolean;
}

export const CustomLink: React.FC<CustomLinkProps> = props => {
	const {
		type,
		reference,
		url,
		newTab,
		appearance,
		children,
		className,
		inverted,
	} = props;

	const href =
		(type === 'reference' &&
			typeof reference?.value === 'object' &&
			`/${reference.value.slug}`) ||
		url;

	// This may happen if we add a nav link to an unpublished page
	if (!href) return null;

	const newTabProps = newTab
		? { target: '_blank', rel: 'noopener noreferrer' }
		: {};

	const isExternal = !href.startsWith('/');

	if (!appearance) {
		return isExternal ? (
			<a href={href} {...newTabProps} className={className}>
				{children}
			</a>
		) : (
			<Link href={href} {...newTabProps} className={className}>
				{children}
			</Link>
		);
	}

	// TODO: Render a button component responsible for rendering the correct elemnt and its appearnce
	return (
		<Button
			className={className}
			newTab={newTab}
			href={href}
			appearance={appearance}
			inverted={inverted}
		>
			{children}
		</Button>
	);
};
