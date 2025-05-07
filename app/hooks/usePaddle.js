'use client';
import { useState, useEffect } from 'react';

export function usePaddle() {
  const [paddleLoaded, setPaddleLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Skip in SSR context
    if (typeof window === 'undefined') return;

    // Check if Paddle is already loaded
    if (window.Paddle) {
      initializePaddle();
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
        
        initializePaddle();
      } catch (err) {
        console.error('Failed to load Paddle:', err);
        setError(err);
      }
    };

    const initializePaddle = () => {
      try {
        // For sandbox testing in development
        const isDevEnvironment = process.env.NODE_ENV !== 'production';
        
        // First set the environment
        window.Paddle.Environment.set(isDevEnvironment ? 'sandbox' : 'production');
        
        // Then initialize with the client-side token
        window.Paddle.Initialize({
          token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
          eventCallback: function(data) {
            console.log('Paddle event:', data);
          }
        });
        
        console.log('Paddle initialized successfully');
        setPaddleLoaded(true);
      } catch (err) {
        console.error('Error initializing Paddle:', err);
        setError(err);
      }
    };

    loadPaddle();
  }, []);

  return { paddleLoaded, error };
}