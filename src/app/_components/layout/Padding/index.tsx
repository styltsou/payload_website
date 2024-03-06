import { cn } from '../../../_utilities/cn';
import classes from './index.module.scss';

export const Padding: React.FC<{
	top: 'none' | 'small' | 'medium' | 'large';
	bottom: 'none' | 'small' | 'medium' | 'large';
	children: React.ReactNode;
}> = ({ top, bottom, children }) => {
	return (
		<div
			className={cn(
				top !== 'none' && classes[`top-${top}`],
				bottom !== 'none' && classes[`bottom-${bottom}`],
			)}
		>
			{children}
		</div>
	);
};
