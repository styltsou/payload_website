import React from 'react';

import { Page } from '../../../payload/payload-types';
import { Grid, Cell } from '@faceless-ui/css-grid';

import { BackgroundColor } from '../../_components/BackgroundColor';
import { Gutter } from '../../_components/layout/Gutter';
import { GridContainer } from '../../_components/layout/GridContainer';
import { Padding } from '../../_components/layout/Padding';
import RichText from '../../_components/RichText';
import { cn } from '../../_utilities/cn';

import classes from './index.module.scss';
import { BlockTypes } from '../blocksMap';

type Props = Extract<Page['layout'][0], { blockType: BlockTypes['content'] }>;

export const ContentBlock: React.FC<
	Props & {
		id?: string;
	}
> = props => {
	const {
		backgroundColor,
		paddingTop,
		paddingBottom,
		accentLine,
		accentLineAlignment,
		columns,
	} = props;

	function getGridColsNumber(
		size: 'oneThird' | 'half' | 'twoThirds' | 'full',
	): number {
		let sizes = {
			oneThird: 4,
			half: 6,
			twoThirds: 8,
			full: 12,
		};

		return sizes[size];
	}

	return (
		<div className={classes.content}>
			<Gutter left={true} right={true} className={classes.bgGutter}>
				<BackgroundColor color={backgroundColor} />
			</Gutter>
			<Padding top={paddingTop} bottom={paddingBottom}>
				<GridContainer className={classes.gridContainer}>
					{accentLine && (
						<div
							className={cn(
								classes.accentLine,
								classes[`accent-alignment-${accentLineAlignment}`],
							)}
						/>
					)}
					<Grid>
						{columns &&
							columns.length > 0 &&
							columns.map((col, index) => (
								<Cell
									key={index}
									cols={getGridColsNumber(col.size)}
									className={classes[`align-${col.textAlignment}`]}
								>
									<BackgroundColor color={backgroundColor}>
										<RichText
											className={backgroundColor === 'red' && classes.whiteText}
											content={col.richText}
										/>
									</BackgroundColor>
								</Cell>
							))}
					</Grid>
				</GridContainer>
			</Padding>
		</div>
	);
};
