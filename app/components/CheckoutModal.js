'use client';
import { useState } from 'react';

export default function CheckoutModal({ isOpen, onClose, onSubmit, loading }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agree: false
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.agree) {
      newErrors.agree = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-70" onClick={onClose}></div>
      
      <div className="relative z-10 bg-[#1A1A1A] rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Orange header bar */}
        <div className="bg-gradient-to-r from-[#FF6B00] to-purple-600 h-2"></div>
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Complete Your Purchase</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="bg-black/30 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-white">Luminora Pro PowerGrade</h3>
                <p className="text-gray-400 text-sm">One-time purchase</p>
              </div>
              <span className="text-xl font-bold text-white">$30</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-[#2A2A2A] border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#FF6B00]`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-[#2A2A2A] border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#FF6B00]`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div className="flex items-start mt-4">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1"
              />
              <label htmlFor="agree" className={`ml-2 text-sm ${errors.agree ? 'text-red-500' : 'text-gray-300'}`}>
                I agree to the terms and conditions and privacy policy
              </label>
            </div>
            {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}
            
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-medium transition-all duration-300 shadow-lg ${
                loading
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#FF6B00] to-purple-600 text-white hover:opacity-90'
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : 'Proceed to Payment'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400 flex items-center justify-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure payment powered by Paddle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}