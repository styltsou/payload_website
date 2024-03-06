import classes from './index.module.scss';
import { Page } from '../../../../../payload/payload-types';
import { Gutter } from '../../../layout/Gutter';
import { GridContainer } from '../../../layout/GridContainer';
import { Cell, Grid } from '@faceless-ui/css-grid';
import RichText from '../../../RichText';
import { Media } from '../../../Media';

export const ContentLeftOfImage: React.FC<{
	title: string;
	hero: Page['hero'];
}> = ({ title, hero }) => {
	const resource = typeof hero?.heroMedia !== 'number' && hero?.heroMedia;

	return (
		<div className={classes.wrapper}>
			<Gutter left right>
				<GridContainer>
					<Grid>
						<Cell cols={6}>
							<p className="label">{title}</p>
							<RichText className={classes.richText} content={hero.richText} />
						</Cell>
					</Grid>
				</GridContainer>
			</Gutter>
			<div className={classes.mediaWrapper}>
				<Media resource={resource} />
			</div>
		</div>
	);
};
