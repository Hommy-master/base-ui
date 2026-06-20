import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ErrorBoundary from '~/components/ErrorBoundary';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes';
import { setGlobalNavigate } from './utils/navigation';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setGlobalNavigate(navigate);
    return () => {
      setGlobalNavigate(null);
    };
  }, [navigate]);

  return (
    <ErrorBoundary>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
