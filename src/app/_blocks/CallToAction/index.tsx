import React from 'react';

import { Page } from '../../../payload/payload-types';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { GridContainer } from '../../_components/layout/GridContainer';
import { Gutter } from '../../_components/layout/Gutter';
import { Padding } from '../../_components/layout/Padding';

import { BackgroundColor } from '../../_components/BackgroundColor';
import RichText from '../../_components/RichText';
import { CustomLink } from '../../_components/Link';

import classes from './index.module.scss';
import { BlockTypes } from '../blocksMap';

type Props = Extract<
	Page['layout'][0],
	{ blockType: BlockTypes['callToAction'] }
>;

export const CallToActionBlock: React.FC<Props> = props => {
	const { backgroundColor, richText, actions } = props;

	return (
		<div className={classes.mainWrapper}>
			<Gutter right className={classes.bgGutter}>
				<BackgroundColor color={backgroundColor} />
			</Gutter>
			<Padding top="medium" bottom="medium">
				<GridContainer>
					<Grid>
						<Cell cols={12}>
							<BackgroundColor color={backgroundColor}>
								<RichText content={richText} />
							</BackgroundColor>
							<div className={classes.actionsWrapper}>
								{actions.map(actionLink => (
									<CustomLink
										key={actionLink.id}
										{...actionLink.link}
										inverted={['red', 'gray'].includes(backgroundColor)}
									>
										{actionLink.link.label}
									</CustomLink>
								))}
							</div>
						</Cell>
					</Grid>
				</GridContainer>
			</Padding>
		</div>
	);
};
