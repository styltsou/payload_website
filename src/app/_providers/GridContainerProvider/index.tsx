'use client';

import React, { createContext, useState, useEffect, useRef } from 'react';
import { useWindowInfo } from '@faceless-ui/window-info';
import { GridContainer } from '../../_components/layout/GridContainer';

export const GridContainerContext = createContext<number>(0);

export const GridContainerProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const ref = useRef(null);
	const { width } = useWindowInfo();

	const [gridContainerWidth, setGridContainerWidth] = useState<number>(0);

	useEffect(() => {
		setGridContainerWidth(ref?.current?.offsetWidth);
	}, [width]);

	return (
		<GridContainerContext.Provider value={gridContainerWidth}>
			{children}
			<GridContainer>
				<div ref={ref} />
			</GridContainer>
		</GridContainerContext.Provider>
	);
};
