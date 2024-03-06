import { Fragment } from 'react';
import { Footer } from '../Footer';

interface TemplateProps {
	children: React.ReactNode;
	className?: string;
}

export const Template = async ({ className, children }) => {
	return (
		<div className={className}>
			{children}
			{/* <Footer /> */}
		</div>
	);
};
