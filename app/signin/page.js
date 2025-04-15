'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import MobileLayout from '../components/MobileLayout';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Here you would implement actual authentication logic
    // For example, connect to an API or authentication service
    
    // Simulating authentication delay
    setTimeout(() => {
      console.log('Sign in attempt with:', { email });
      setIsLoading(false);
      router.push('/'); // Redirect to home after sign in
    }, 1000);
  };

  return (
    <MobileLayout>
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="w-full max-w-md p-6">
          <h1 className="text-3xl font-bold text-center mb-8">Sign In</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-6 bg-red-800 hover:bg-red-800 text-white font-bold rounded-lg text-lg"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p>
              Don't have an account?{' '}
              <Link href="/signup" className="text-red-800 hover:text-blue-700">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
