'use client';
import { Page } from '../../../payload/payload-types';
import { useRef, useState, useEffect } from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { useScrollInfo } from '@faceless-ui/scroll-info';

import { Gutter } from '../../_components/layout/Gutter';
import { BackgroundColor } from '../../_components/BackgroundColor';
import { GridContainer } from '../../_components/layout/GridContainer';
import { useIntersect } from '../../_hooks/useIntersect';
import { cn } from '../../_utilities/cn';

import { BlockTypes } from '../blocksMap';
import classes from './index.module.scss';

type Props = Extract<
	Page['layout'][0],
	{ blockType: BlockTypes['stickyContent'] }
>;

export const StickyContentBlock: React.FC<Props> = ({
	backgroundColor,
	sections,
}) => {
	const stickyRef = useRef();
	const { y: yScrollPosition } = useScrollInfo();
	const [intersectionRef, entry] = useIntersect({});

	const [activeSectionIdx, setActiveSectionIdx] = useState<number>(0);
	const [position, setPosition] = useState<{ top: number; bottom: number }>({
		top: 0,
		bottom: 0,
	});

	const isInViewport = Boolean(entry?.isIntersecting);

	useEffect(() => {}, [yScrollPosition, isInViewport, stickyRef]);

	return (
		<div ref={intersectionRef} className={classes.mainWrapper}>
			<div ref={stickyRef} className={classes.stickyContainer}>
				<Gutter left className={classes.bgGutter}>
					<BackgroundColor color={backgroundColor} />
				</Gutter>
				<GridContainer className={classes.stickyGrid}>
					<Grid>
						<Cell
							cols={6}
							colsM={3}
							htmlElement="ul"
							className={classes.titlesList}
						>
							{sections.map((section, idx) => (
								<li
									key={section.id}
									className={cn(
										classes.title,
										activeSectionIdx === idx && classes.titleActive,
									)}
								>
									{section.title}
								</li>
							))}
						</Cell>
					</Grid>
				</GridContainer>
				<Gutter left className={classes.gradientGutter}>
					<div />
				</Gutter>
			</div>
			<div className={classes.descriptionWrapper}></div>
		</div>
	);
};
