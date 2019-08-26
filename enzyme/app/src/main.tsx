import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from './app/app-routes';
import { defaultTheme } from '@core/themes';

import '@assets/styles/main.css';

import './polyfills';

ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
        <AppRoutes />
    </ThemeProvider>,
    document.getElementById('root'),
);
