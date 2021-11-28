import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FourOhFour } from '../pages/FourOhFour';
import { FrontPage } from '../pages/FrontPage';
import { Login } from '../pages/Login';
import { Restaurent } from '../pages/Restaurent';

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/frontPage" element={<FrontPage />} />
        <Route path="/restaurent/:id" element={<Restaurent />} />
        <Route element={<FourOhFour />} />
      </Routes>
    </BrowserRouter>
  );
};
