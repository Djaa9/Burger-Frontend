import React, { FC } from 'react';
import { AppProviders } from './providers/appProvider';
import { AppRoutes } from './routes/appRoutes';

export const App: FC = () => {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
};
