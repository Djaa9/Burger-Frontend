import React, { FC } from 'react';
import { AppProviders } from './providers/app';
import { AppRoutes } from './routes/appRoutes';

export const App: FC = () => {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
};
