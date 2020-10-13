import React from 'react';
import ThemeContextProvider from './context/ThemeContext';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
      <ThemeContextProvider>
          <HomePage/>
      </ThemeContextProvider>
  );
}

export default App;
