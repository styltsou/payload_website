import React from 'react';
import { GridProvider } from '@faceless-ui/css-grid';
import { breakpoints, base } from '../../cssVariables';

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <GridProvider
      breakpoints={breakpoints}
      rowGap={{
        s: base(2),
        m: base(2),
        l: base(2),
        xl: base(2),
      }}
      colGap={{
        s: base(2),
        m: base(2),
        l: base(2),
        xl: base(2),
      }}
      cols={{
        s: 8,
        m: 8,
        l: 12,
        xl: 12
      }}
    >
      {children}
    </GridProvider>
  );
}
