import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes';
import { setGlobalNavigate } from './utils/navigation';
import LoginModal from './components/LoginModal';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setGlobalNavigate(navigate);
    return () => {
      setGlobalNavigate(null);
    };
  }, [navigate]);

  return (
    <AuthProvider>
      <AppRoutes />
      <LoginModal />
    </AuthProvider>
  );
}

export default App;
