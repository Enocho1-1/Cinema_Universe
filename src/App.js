import { AllRoutes } from './routes/AllRoutes';
import { QueryClient,QueryClientProvider } from 'react-query';
import './App.css';

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <AllRoutes />
      </div>
    </QueryClientProvider>
   
  );
}

export default App;
