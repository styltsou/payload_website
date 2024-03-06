'use client';

import Arrow from '../../icons/Arrow';
import classes from './index.module.scss';

export const ScrollToTop = () => {
	const scrollToTop = () => window.scrollTo(0, 0);

	return (
		<button className={classes.backToTop} onClick={scrollToTop}>
			<Arrow color="gray" />
		</button>
	);
};
