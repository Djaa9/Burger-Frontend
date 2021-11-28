import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FourOhFour } from '../pages/FourOhFour';
import { Login } from '../pages/Login';
import { Navigation } from '../pages/Navigation/Navigation';

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="app/*" element={<Navigation />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </BrowserRouter>
  );
};
