'use client';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-300">
          <p>At ColorCraft, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or purchase our Luminora PowerGrade products.</p>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Information:</strong> When you make a purchase or contact us, we collect your name, email address, and payment information.</li>
            <li><strong>Technical Information:</strong> We automatically collect your IP address, browser type, device information, and how you interact with our website.</li>
            <li><strong>Customer Communications:</strong> We keep records of your support requests, feedback, and other communications with us.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process your orders and payments for Luminora PowerGrades</li>
            <li>Deliver digital products and send order confirmations</li>
            <li>Provide customer support and respond to your inquiries</li>
            <li>Send product updates, tutorials, and relevant marketing communications</li>
            <li>Improve our website, products, and customer experience</li>
            <li>Comply with legal obligations and enforce our terms</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Payment Processing</h2>
          <p>All payments are processed through secure third-party payment processors. We do not store your full credit card details on our servers. Payment processors may collect additional information according to their own privacy policies.</p>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Sharing Your Information</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payment processors to complete transactions</li>
            <li>Email service providers to send order confirmations and support communications</li>
            <li>Legal authorities when required by law</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access or disclosure. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Your Rights</h2>
          <p>Depending on your location, you may have rights to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion of your data</li>
            <li>Restrict or object to certain processing activities</li>
            <li>Request a copy of your data in a portable format</li>
          </ul>
          <p>To exercise these rights, please contact us at pabasaraf79@gmail.com.</p>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Cookies and Tracking</h2>
          <p>We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can manage cookie preferences through your browser settings.</p>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will post the updated policy on this page with a revised "Last Updated" date.</p>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Contact Us</h2>
          <p>If you have questions about this Privacy Policy or our data practices, please contact us at pabasaraf79@gmail.com.</p>
          
          <p className="mt-8">Last Updated: April 17, 2025</p>
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