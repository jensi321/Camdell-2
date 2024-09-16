import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProfileProvider } from './Components/Context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <BrowserRouter>
      <React.StrictMode>
        <ProfileProvider>
          <App />
        </ProfileProvider>
      </React.StrictMode>
    </BrowserRouter>

  </>
);
