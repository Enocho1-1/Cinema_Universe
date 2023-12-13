import { AllRoutes } from './routes/AllRoutes';
import { ToastContainer } from 'react-toastify';
import { ScrollTop } from './components/index';

function App() {
  return (
    <div>
       <ToastContainer
            position="top-right"
            autoClose={2000}
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
      <AllRoutes/>
    </div>
  );
}

export default App;
