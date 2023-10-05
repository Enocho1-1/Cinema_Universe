import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ScrollTop } from './components/index';
import { QueryClient,QueryClientProvider } from 'react-query';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';


const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
        <ScrollTop/>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
 

  </React.StrictMode>
);

