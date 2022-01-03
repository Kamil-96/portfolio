import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import Projects from './components/views/Projects/Projects';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);

export default App;
