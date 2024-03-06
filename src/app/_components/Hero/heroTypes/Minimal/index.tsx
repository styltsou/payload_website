import classes from './index.module.scss';
import { cn } from '../../../../_utilities/cn';
import { Page } from '../../../../../payload/payload-types';
import { GridContainer } from '../../../layout/GridContainer';
import RichText from '../../../RichText';

export const Minimal: React.FC<{ title: string; hero: Page['hero'] }> = ({
	title,
	hero,
}) => {
	return (
		<GridContainer>
			<p className={cn('label', classes.title)}>{title}</p>
			<RichText className={classes.richText} content={hero.richText} />
		</GridContainer>
	);
};
