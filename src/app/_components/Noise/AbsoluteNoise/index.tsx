import classes from './index.module.scss';
import { cn } from '../../../_utilities/cn';

type AbsoluteNoiseProps = {
	className?: string;
};

export const AbsoluteNoise: React.FC<AbsoluteNoiseProps> = ({ className }) => {
	return <div className={cn(classes.noise, className && className)} />;
};
