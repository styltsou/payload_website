import React from 'react';
import { WindowInfoProvider } from '@faceless-ui/window-info';
import { breakpoints } from '../../cssVariables';

const breakpointsToString = Object.fromEntries(
  Object.entries(breakpoints).map(([key, value]) => [key, value.toString()]),
);

export function Provider({ children }: { children: React.ReactNode }) {
  return <WindowInfoProvider breakpoints={breakpointsToString}>{children}</WindowInfoProvider>;
}
