import React from 'react';
import {createRoot} from 'react-dom/client';
import WebApp from "./WebApp";

window.localStorage.setItem('debug', '*');
const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <WebApp/>
    </React.StrictMode>
);
