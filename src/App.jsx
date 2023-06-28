import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { store } from './App/store';
import { Provider } from 'react-redux';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { MyCV } from './App/MyCV';
import { Calendar } from './App/Calendar';
import { Settings } from './App/Settings';
import { Blog } from './App/Blog';
import { FAQ } from './App/FAQ';
import { CookieBanner } from './App/Components/CookieBanner';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout withSidebar />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard/*" element={<Dashboard />} />
            <Route path="mycv/*" element={<MyCV />} />
            <Route path="exercises/*" element={<Exercises />} />
            <Route path="blocks/*" element={<Blocks />} />
            <Route path="blog/*" element={<Blog />} />
            <Route path="calendar/*" element={<Calendar />} />
            <Route path="settings/*" element={<Settings />} />
            <Route path="faq/*" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </Provider>
  );
}
