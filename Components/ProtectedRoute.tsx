import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '@/store/store'; 
import { useEffect } from 'react';


const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login'); 
    }
  }, [isAuthenticated, router]);

  return <>{isAuthenticated ? children : null}</>; 
};

export default ProtectedRoute;
