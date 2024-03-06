'use client';

import React from 'react';
import { AuthProvider } from './Auth';
import { Provider as GridProvider } from './GridProvider';
import { ScrollInfoProvider } from '@faceless-ui/scroll-info';
import { MouseInfoProvider } from '@faceless-ui/mouse-info';
import { Provider as WindowInfoProvider } from './WindowInfoProvider';
import { Provider as ModalProvider } from './ModalProvider';
import { GridContainerProvider } from './GridContainerProvider';

export const Providers: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<AuthProvider>
			<ModalProvider>
				<WindowInfoProvider>
					<ScrollInfoProvider>
						<MouseInfoProvider>
							<GridProvider>
								<GridContainerProvider>{children}</GridContainerProvider>
							</GridProvider>
						</MouseInfoProvider>
					</ScrollInfoProvider>
				</WindowInfoProvider>
			</ModalProvider>
		</AuthProvider>
	);
};
