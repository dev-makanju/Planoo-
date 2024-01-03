import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <GoogleOAuthProvider
    clientId='751017779433-6hir7cbjeda4mjforoctd66655qdb5vb.apps.googleusercontent.com'
    >
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </GoogleOAuthProvider>
);

reportWebVitals();
