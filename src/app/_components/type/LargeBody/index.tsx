import React, { HTMLProps, ElementType } from 'react';

interface Props extends HTMLProps<HTMLElement> {
	htmlElement?: ElementType;
	className?: string;
	children: React.ReactNode;
}

export const LargeBody: React.FC<Props> = props => {
	const { className, children, htmlElement: Tag = 'div', ...rest } = props;

	return (
		<Tag
			className={['large_body', className].filter(Boolean).join(' ')}
			{...rest}
		>
			{children}
		</Tag>
	);
};
