'use client';
import { Page } from '../../../payload/payload-types';
import { BlockTypes } from '../blocksMap';

import Link from 'next/link';
import { SliderOnBackground } from '../../_components/Slider/OnBackground';
import { useGridContainerWidth } from '../../_hooks/useGridContainerWidth';
import { cn } from '../../_utilities/cn';
import classes from './index.module.scss';
import { Media } from '../../_components/Media';
import { base } from '../../cssVariables';

type Props = Extract<
	Page['layout'][0],
	{ blockType: BlockTypes['studySlider'] }
>;

export const StudySliderBlock: React.FC<Props> = props => {
	const { backgroundColor, studies } = props;
	const gridContainerWidth = useGridContainerWidth();

	return (
		<SliderOnBackground
			backgroundColor={backgroundColor}
			slides={studies.map(study => {
				if (typeof study !== 'object') return null;

				const imgResource =
					typeof study.featuredMedia === 'object' ? study.featuredMedia : null;

				return (
					<div
						key={study.id}
						className={classes.slide}
						style={{
							maxWidth: `calc(${gridContainerWidth}px / 2 + ${base(3)})`,
						}}
					>
						<Media resource={imgResource} />
						<Link
							href={`/studies/${study.slug}`}
							className={cn(
								classes.title,
								!['red', 'gray'].includes(backgroundColor) && classes.inverted,
							)}
						>
							<h5>{study.title}</h5>
						</Link>
					</div>
				);
			})}
		/>
	);
};
