'use client'

import React from 'react'
import { AuthProvider } from './Auth'
import { Provider as GridProvider } from './GridProvider';
import { Provider as WindowInfoProvider } from './WindowInfoProvider'
import { Provider as ModalProvider } from './ModalProvider';

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <AuthProvider>
      <ModalProvider>
        <WindowInfoProvider>
          <GridProvider>
            {children}
          </GridProvider>
        </WindowInfoProvider>
      </ModalProvider>
    </AuthProvider>
  )
}
