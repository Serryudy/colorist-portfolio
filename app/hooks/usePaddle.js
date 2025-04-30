'use client';
import { useState, useEffect } from 'react';

export function usePaddle() {
  const [paddleLoaded, setPaddleLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if Paddle is already loaded
    if (window.Paddle) {
      setPaddleLoaded(true);
      return;
    }

    const loadPaddle = async () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://cdn.paddle.com/paddle/paddle.js';
        script.async = true;
        
        const loadPromise = new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = () => reject(new Error('Failed to load Paddle'));
        });

        document.body.appendChild(script);
        await loadPromise;

        window.Paddle.Setup({
          vendor: process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID,
          environment: process.env.NODE_ENV === 'production' ? 'production' : 'sandbox'
        });

        setPaddleLoaded(true);
      } catch (err) {
        console.error('Failed to initialize Paddle:', err);
        setError(err);
      }
    };

    loadPaddle();

    return () => {
      const script = document.querySelector('script[src*="paddle.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return { paddleLoaded, error };
}