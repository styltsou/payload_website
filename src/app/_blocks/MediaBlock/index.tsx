import React from 'react';
import { Page } from '../../../payload/payload-types';
import { BlockTypes } from '../blocksMap';
import { GridContainer } from '../../_components/layout/GridContainer';
import { Media } from '../../_components/Media';

import classes from './index.module.scss';
import Parallax from '../../_components/Parallax';
import { Gutter } from '../../_components/layout/Gutter';

const PARALLAX_DISTANCE = 100;

type Props = Extract<
	Page['layout'][0],
	{ blockType: BlockTypes['mediaBlock'] }
>;

export const MediaBlock: React.FC<Props> = props => {
	const { type, media } = props;

	if (typeof media === 'object') {
		if (type === 'fullscreen') {
			return (
				<div className={classes.fullScreen}>
					<Parallax
						className={classes.fullScreenParallax}
						yDistance={PARALLAX_DISTANCE}
					>
						<Media className={classes.fullScreenImage} resource={media} />
					</Parallax>
				</div>
			);
		}

		if (type === 'wide') {
			return (
				<Gutter left right className={classes.wide}>
					<Media className={classes.wide} resource={media} />
				</Gutter>
			);
		}

		return (
			<GridContainer>
				<Media className={classes.normal} resource={media} />
			</GridContainer>
		);
	}

	return null;
};
