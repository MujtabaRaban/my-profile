import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/lottie/Loading.json';

interface LoadingAnimationProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
  fullScreen?: boolean
  backgroundColor?: string
}



export const LoadingAnimation = ({
  message = 'Loading...',
  size = 'md',
  fullScreen = true,
  backgroundColor = 'bg-gradient-to-br from-amber-900 via-slate-900 to-amber-800'
}: LoadingAnimationProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sizeClasses = { sm: 'w-16 h-16', md: 'w-24 h-24', lg: 'w-32 h-32' };
  const containerClasses = fullScreen 
    ? `fixed inset-0 z-50 flex items-center justify-center ${backgroundColor} backdrop-blur-sm`
    : 'flex items-center justify-center p-8';

  return (
    <div className={containerClasses}>
      <div className="text-center">
        <div className={`${sizeClasses[size]} mx-auto mb-4`}>
          {isClient && (
            <Lottie animationData={loadingAnimation} loop className="w-full h-full" />
          )}
        </div>
        {message && (
          <p className="text-amber-200 text-lg font-medium animate-pulse">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
