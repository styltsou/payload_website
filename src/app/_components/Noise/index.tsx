import { AbsoluteNoise } from './AbsoluteNoise';
import classes from './index.module.scss';

export const Noise: React.FC = () => {
	return (
		<div className={classes.wrapper}>
			<AbsoluteNoise />
		</div>
	);
};
