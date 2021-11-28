import React, { FC, Suspense } from 'react';
import { MantineProvider } from '@mantine/core';

interface AppProviderProps {
  children?: React.ReactNode;
}

export const AppProviders: FC<AppProviderProps> = ({ children }) => {
  return (
    <Suspense fallback="Loading ...">
      <MantineProvider>{children}</MantineProvider>
    </Suspense>
  );
};
