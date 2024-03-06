'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { useWindowInfo } from '@faceless-ui/window-info';

import { GridContainer } from '../../layout/GridContainer';
import { Gutter } from '../../layout/Gutter';
import { BackgroundColor } from '../../BackgroundColor';

import Slider, { SliderProvider } from '..';
import { SliderContext } from '../types';

import classes from './index.module.scss';

type Props = {
	backgroundColor: 'none' | 'red' | 'blue' | 'orange' | 'gray';
	slides: React.ReactNode[];
};

export const SliderOnBackground: React.FC<Props> = ({
	backgroundColor,
	slides,
}) => {
	const containerRef = useRef(null);
	const gridRef = useRef(null);

	const { width } = useWindowInfo();

	const [sliderLeftPadding, setSliderLeftPadding] = useState<number>(0);
	const [showTrack, setShowTrack] = useState<boolean>(true);

	useEffect(() => {
		if (containerRef?.current && gridRef?.current) {
			const containerWidth = containerRef.current.offsetWidth;
			const gridWidth = gridRef.current.offsetWidth;

			const widthToSet = (containerWidth - gridWidth) / 2;
			setSliderLeftPadding(widthToSet);
		}
	}, [width]);

	useEffect(() => {
		if (slides.length <= 2) {
			setShowTrack(false);
		}
	}, [slides.length]);

	return (
		<div className={classes.sliderOnBackground} ref={containerRef}>
			<Gutter right className={classes.gutter}>
				<BackgroundColor color={backgroundColor} className={classes.bg} />
			</Gutter>
			<SliderProvider>
				{(slider: SliderContext) => (
					<Fragment>
						<div className={classes.slider}>
							<Slider hideScrollbar>
								{slides.map((slide, i) => (
									<div
										style={{
											marginLeft: i === 0 ? sliderLeftPadding : undefined,
										}}
										key={i}
									>
										{slide}
									</div>
								))}
							</Slider>
						</div>
						{showTrack && (
							<GridContainer className={classes.trackWrap}>
								<div ref={gridRef}>
									<div className={classes.track}>
										<div
											className={classes.indicator}
											style={{ left: `${slider.percentScrolled * 100}%` }}
										/>
									</div>
								</div>
							</GridContainer>
						)}
					</Fragment>
				)}
			</SliderProvider>
		</div>
	);
};
