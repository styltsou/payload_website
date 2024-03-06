import { Page } from '../../../payload/payload-types';
import { BlockTypes } from '../blocksMap';

import { Gutter } from '../../_components/layout/Gutter';
import { BackgroundColor } from '../../_components/BackgroundColor';
import Parallax from '../../_components/Parallax';
import { cn } from '../../_utilities/cn';

import classes from './index.module.scss';
import { StatisticBubble } from '../../_components/StatisticBubble';
import { GridContainer } from '../../_components/layout/GridContainer';

type Props = Extract<
	Page['layout'][0],
	{ blockType: BlockTypes['statistics'] }
>;

export const StatisticsBlock: React.FC<Props> = props => {
	const { backgroundColor, topOverlap, bottomOverlap, statistics } = props;

	return (
		<div
			className={cn(
				classes.wrapper,
				topOverlap !== 'none' && classes[`topOverlap--${topOverlap}`],
				bottomOverlap !== 'none' && classes[`bottomOverlap--${bottomOverlap}`],
			)}
		>
			<div
				className={cn(
					classes.bgWrapper,
					topOverlap !== 'none' && classes[`topOverlap--${topOverlap}`],
					bottomOverlap !== 'none' &&
						classes[`bottomOverlap--${bottomOverlap}`],
				)}
			>
				<Gutter className={classes.backgroundGutter} left right>
					<BackgroundColor color={backgroundColor} />
				</Gutter>
			</div>
			<ul className={classes.statsWrapper}>
				{statistics.map((item, idx) => (
					<li key={item.id} className={classes[`stat--${idx + 1}`]}>
						<Parallax yDistance={(idx + 1) * 60}>
							<StatisticBubble
								stat={item.stat}
								description={item.description}
							/>
						</Parallax>
					</li>
				))}
			</ul>
		</div>
	);
};
