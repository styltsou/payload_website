import { Fragment } from 'react';
import { Page } from '../../../payload/payload-types';

import { BackgroundColor } from '../../_components/BackgroundColor';
import { CustomLink } from '../../_components/Link';
import { GridContainer } from '../../_components/layout/GridContainer';
import { Gutter } from '../../_components/layout/Gutter';
import { BlockTypes } from '../blocksMap';
import Arrow from '../../_components/icons/Arrow';
import classes from './index.module.scss';

type Props = Extract<Page['layout'][0], { blockType: BlockTypes['ctaGrid'] }>;

export const CTAGridBlock: React.FC<Props> = props => {
	const { backgroundColor, actions } = props;

	return (
		<Fragment>
			{actions.map(action => (
				<div key={action.id} className={classes.actionWrapper}>
					<Gutter left className={classes.gutterBg}>
						<BackgroundColor color={backgroundColor} />
					</Gutter>
					<GridContainer>
						<BackgroundColor
							color={backgroundColor}
							className={classes.actionContainer}
						>
							<p className={classes.label}>{action.label}</p>
							<CustomLink {...action.link} className={classes.link}>
								<span>{action.link.label}</span>
								<Arrow />
							</CustomLink>
						</BackgroundColor>
					</GridContainer>
				</div>
			))}
		</Fragment>
	);
};
