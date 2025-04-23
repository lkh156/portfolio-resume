// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';               // note the `/client`
import App from './App';
import { ThemeProvider as EmotionProvider } from '@emotion/react';
import { ThemeProvider as MUIProvider } from '@mui/material/styles';
import theme from './theme/theme';

// Create the root and render
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <EmotionProvider theme={theme}>
      <MUIProvider theme={theme}>
        <App />
      </MUIProvider>
    </EmotionProvider>
  </React.StrictMode>
);