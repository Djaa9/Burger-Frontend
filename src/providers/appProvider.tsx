import React, { FC, Suspense } from 'react';
import { MantineProvider, TypographyStylesProvider } from '@mantine/core';
import { theme } from '../theme/theme';

interface AppProviderProps {
  children?: React.ReactNode;
}

export const AppProviders: FC<AppProviderProps> = ({ children }) => {
  return (
    <Suspense fallback="Loading ...">
      <MantineProvider theme={theme}>
        <TypographyStylesProvider style={{ height: '100%' }}>{children}</TypographyStylesProvider>
      </MantineProvider>
    </Suspense>
  );
};
