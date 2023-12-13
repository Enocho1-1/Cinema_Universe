import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { WatchProvider } from './context/WatchContext';
import { QueryClient,QueryClientProvider } from 'react-query';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';


const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WatchProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WatchProvider>
   
    </QueryClientProvider>
 

  </React.StrictMode>
);

