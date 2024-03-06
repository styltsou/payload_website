import classes from './index.module.scss';

type Color = 'red' | 'orange' | 'blue' | 'antique' | 'gray' | 'white' | 'black';

interface ArrowProps {
	color?: Color;
	className?: string;
}

const Arrow: React.FC<ArrowProps> = ({ color = 'white', className }) => {
	return (
		<svg
			width="60"
			height="60"
			viewBox="0 0 60 60"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M2.45898 30.95L57.6507 30.95M57.6507 30.95L48.7007 22M57.6507 30.95L48.7007 39.9"
				strokeWidth="2"
				strokeMiterlimit="16"
				strokeLinecap="square"
				className={classes[`color_${color}`]}
			/>
		</svg>
	);
};

export default Arrow;
