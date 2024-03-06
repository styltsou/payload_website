import classes from './index.module.scss';

export const SpacerBlock: React.FC<{ size: 'small' | 'medium' | 'lare' }> = ({
	size,
}) => {
	return <div className={classes[`spacer-${size}`]}></div>;
};
