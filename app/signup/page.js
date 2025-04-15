'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import MobileLayout from '../components/MobileLayout';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    // Here you would implement account creation logic
    // For example, connect to an API or authentication service
    
    // Simulating signup delay
    setTimeout(() => {
      console.log('Sign up attempt with:', { name, email });
      setIsLoading(false);
      router.push('/signin'); // Redirect to sign in after account creation
    }, 1000);
  };

  return (
    <MobileLayout>
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="w-full max-w-md p-6">
          <h1 className="text-3xl font-bold text-center mb-8">Create Account</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="signup-email"
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                minLength={6}
              />
            </div>
            
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                minLength={6}
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-6 bg-red-800 hover:bg-red-800 text-white font-bold rounded-lg text-lg"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p>
              Already have an account?{' '}
              <Link href="/signin" className="text-red-800 hover:text-green-700">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}