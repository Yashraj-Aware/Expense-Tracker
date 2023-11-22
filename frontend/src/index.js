import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IncomesContextProvider } from './context/IncomeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IncomesContextProvider>
       <App />
    </IncomesContextProvider>
   
    
  </React.StrictMode>
);

