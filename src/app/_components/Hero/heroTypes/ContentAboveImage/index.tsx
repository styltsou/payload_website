import classes from './index.module.scss';
import { Page } from '../../../../../payload/payload-types';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { GridContainer } from '../../../layout/GridContainer';
import { Gutter } from '../../../layout/Gutter';
import RichText from '../../../RichText';
import { Media } from '../../../Media';

export const ContentAboveImage: React.FC<{ hero: Page['hero'] }> = ({
	hero,
}) => {
	const resource = typeof hero?.heroMedia !== 'number' && hero.heroMedia;

	return (
		<div className={classes.wrapper}>
			<GridContainer>
				<Grid>
					<Cell cols={12} start={2}>
						<RichText className={classes.richText} content={hero.richText} />
					</Cell>
				</Grid>
			</GridContainer>
			<Gutter left right className={classes.gutter}>
				<div className={classes.mediaWrapper}>
					<Media className={classes.media} resource={resource} />
				</div>
			</Gutter>
		</div>
	);
};
