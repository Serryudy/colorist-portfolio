'use client';
import Link from 'next/link';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        
        <div className="space-y-6 text-gray-300">
          <p>Thank you for shopping at ColorCraft. We value your satisfaction with our PowerGrade products and strive to provide the highest quality color grading tools. Please read our refund policy carefully.</p>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Digital Products</h2>
          <p>Luminora PowerGrades and other digital products sold on our website are eligible for refund within 30 days of purchase if they do not function as described. Due to the digital nature of our products, we require demonstration of the issue before processing a refund.</p>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Refund Conditions</h2>
          <p>To be eligible for a refund, you must provide:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proof of purchase (order number and email)</li>
            <li>Description of the issue encountered</li>
            <li>Details about your system configuration (DaVinci Resolve version, operating system)</li>
            <li>Screenshots or video demonstrating the issue (if applicable)</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Refund Process</h2>
          <p>Once we receive your refund request with all necessary information:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Our technical team will review your request within 3 business days</li>
            <li>We may contact you with troubleshooting steps to resolve the issue</li>
            <li>If the issue cannot be resolved, a full refund will be issued to your original payment method</li>
            <li>Refunds typically process within 5-10 business days, depending on your payment provider</li>
          </ol>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Non-Refundable Circumstances</h2>
          <p>Refunds will not be issued in the following situations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Requests made after the 30-day refund period</li>
            <li>Compatibility issues clearly stated in our product descriptions</li>
            <li>Changes in project requirements or creative direction</li>
            <li>Issues caused by improper installation or modification of our files</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Free Products</h2>
          <p>Our free Luminora PowerGrade products are provided as-is without warranty and are not eligible for refunds or compensation.</p>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Contact Us</h2>
          <p>If you have any questions about our refund policy or wish to request a refund, please contact our support team at pabasaraf79@gmail.com. Please include your order number and details about your purchase.</p>
        </div>
        
        <div className="mt-12">
          <Link href="/" className="text-[#FF6B00] hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}