'use client';
import Link from 'next/link';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="space-y-6 text-gray-300">
          <p>Welcome to ColorCraft. These Terms and Conditions govern your use of our website and the purchase of Luminora PowerGrade products. By accessing our website or purchasing our products, you agree to these terms.</p>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Use of the Website</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must be at least 18 years old to make purchases on our website.</li>
            <li>You agree to provide accurate information when creating an account or making purchases.</li>
            <li>You are responsible for maintaining the confidentiality of your account information.</li>
            <li>You may not use our website for any illegal or unauthorized purpose.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Intellectual Property</h2>
          <p>Luminora PowerGrades and all materials on our website are protected by copyright and other intellectual property laws:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You may use purchased PowerGrades in your personal or commercial projects without attribution.</li>
            <li>You may not redistribute, resell, or share purchased PowerGrades with others.</li>
            <li>You may not claim ownership of our PowerGrades or incorporate them into another product for resale.</li>
            <li>Website content, including text, images, logos, and design elements, are the property of ColorCraft and may not be used without permission.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Product Usage Rights</h2>
          <p>When you purchase Luminora PowerGrades:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You receive a non-exclusive, non-transferable license to use the purchased PowerGrades.</li>
            <li>This license allows you to use the PowerGrades in unlimited personal and commercial projects.</li>
            <li>You may modify the PowerGrades for your specific project needs.</li>
            <li>You may not claim the PowerGrades as your own creation or repackage them for distribution.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Product Descriptions</h2>
          <p>We strive to describe our products accurately. However:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visual examples are representations and results may vary based on your footage.</li>
            <li>We do not guarantee compatibility with all software versions or camera formats.</li>
            <li>We recommend checking system requirements before purchasing.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Payments and Pricing</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All prices are in USD unless otherwise specified.</li>
            <li>We reserve the right to change prices at any time without notice.</li>
            <li>Payment is processed securely through our payment processor.</li>
            <li>You agree to provide valid payment information and authorize us to charge your payment method.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Digital Delivery</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>PowerGrades are delivered electronically to the email address provided at checkout.</li>
            <li>Delivery is typically immediate but may take up to 24 hours.</li>
            <li>You are responsible for downloading and backing up your purchased files.</li>
            <li>We are not responsible for lost files after the initial download period.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Limitation of Liability</h2>
          <p>To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>ColorCraft will not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of our website or products.</li>
            <li>Our total liability for any claim shall not exceed the amount paid for the product in question.</li>
            <li>We provide no warranty or guarantee that our website will be error-free or uninterrupted.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Governing Law</h2>
          <p>These Terms and Conditions are governed by and construed in accordance with the laws of Sri Lanka. Any disputes shall be subject to the exclusive jurisdiction of the courts in Colombo, Sri Lanka.</p>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Changes to Terms</h2>
          <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website after such changes constitutes acceptance of the new terms.</p>
          
          <h2 className="text-2xl font-bold text-[#FF6B00] mt-8">Contact Us</h2>
          <p>If you have questions about these Terms and Conditions, please contact us at pabasaraf79@gmail.com.</p>
          
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