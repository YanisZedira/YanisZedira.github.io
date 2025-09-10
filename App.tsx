
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import PortfolioPage from './pages/PortfolioPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    // FIX: Swapped ThemeProvider and HashRouter. Routers are often expected at the top of the component tree.
    <HashRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
