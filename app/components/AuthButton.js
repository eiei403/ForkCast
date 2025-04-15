'use client';

import Link from 'next/link';

export default function AuthButton({ type, href, onClick }) {
  const buttonStyle = 
    type === 'signin' 
      ? 'bg-red-800 hover:bg-red-600' 
      : 'bg-red-800 hover:bg-green-600';
  
  const buttonText = type === 'signin' ? 'Sign In' : 'Sign Up';
  
  return (
    <Link href={href}>
      <button 
        className={`${buttonStyle} text-white font-bold py-3 px-6 rounded-lg w-full mb-4 text-lg`}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </Link>
  );
}