import React from 'react';
import Content from './components/Content';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
    return (
      <ThemeProvider>
      <Content/>
      </ThemeProvider>

    );
}
