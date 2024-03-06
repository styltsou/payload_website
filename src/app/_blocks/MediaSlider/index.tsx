'use client';
import { Page } from '../../../payload/payload-types';
import { BlockTypes } from '../blocksMap';

import { useGridContainerWidth } from '../../_hooks/useGridContainerWidth';
import { SliderOnBackground } from '../../_components/Slider/OnBackground';

import classes from './index.module.scss';
import { Media } from '../../_components/Media';

type Props = Extract<
	Page['layout'][0],
	{ blockType: BlockTypes['mediaSlider'] }
>;

export const MediaSliderBlock: React.FC<Props> = ({
	backgroundColor,
	media,
}) => {
	const gridContainerWidth = useGridContainerWidth();

	return (
		<SliderOnBackground
			backgroundColor={backgroundColor}
			slides={media?.map(({ media }, i) => {
				const resource = typeof media === 'object' ? media : null;

				if (!resource) return null;

				return (
					<div
						className={classes.slide}
						style={{ maxWidth: gridContainerWidth }}
					>
						<Media
							resource={resource}
							style={{ maxWidth: gridContainerWidth }}
						/>
					</div>
				);
			})}
		/>
	);
};
