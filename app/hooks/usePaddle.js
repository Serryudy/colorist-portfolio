// hooks/usePaddle.js - Updated for Paddle Billing
import { useState, useEffect } from 'react';

export function usePaddle() {
  const [paddleLoaded, setPaddleLoaded] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Only load Paddle if we're in the browser
    if (typeof window === 'undefined') return;
    
    // Function to initialize Paddle
    const initializePaddle = () => {
      if (window.Paddle) {
        try {
          // Use Paddle Billing setup with client token
          window.Paddle.Environment.set(process.env.NODE_ENV === 'production' ? 'production' : 'sandbox');
          window.Paddle.Billing.setup(process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN);
          setPaddleLoaded(true);
        } catch (err) {
          console.error('Error initializing Paddle:', err);
          setError(err);
        }
      }
    };

    // Check if Paddle is already loaded
    if (window.Paddle) {
      initializePaddle();
      return;
    }

    // If not, load the Paddle Billing script (note the different URL)
    const script = document.createElement('script');
    script.src = 'https://cdn.paddle.com/paddle/v2/paddle.js';
    script.async = true;
    script.onload = initializePaddle;
    script.onerror = (err) => {
      console.error('Error loading Paddle script:', err);
      setError(new Error('Failed to load Paddle script'));
    };
    
    document.body.appendChild(script);
    
    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return { paddleLoaded, error };
}