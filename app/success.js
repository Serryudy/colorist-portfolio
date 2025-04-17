'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('order_number');

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center p-4">
      <div className="bg-[#1A1A1A] max-w-md w-full p-8 rounded-xl shadow-lg text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-4">Thank You for Your Purchase!</h1>
        <p className="text-gray-300 mb-6">
          Your Luminora Pro PowerGrade will be sent to your email shortly.
          Please check your inbox (and spam folder) for the download link.
        </p>
        <p className="text-gray-300 mb-6">
          Order Number: <span className="text-[#FF6B00]">{orderNumber || 'Processing'}</span>
        </p>
        <Link href="/" className="inline-block px-6 py-3 bg-[#FF6B00] text-white rounded-lg font-medium hover:bg-[#E36000] transition-colors duration-300">
          Return to Home
        </Link>
      </div>
    </div>
  );
}