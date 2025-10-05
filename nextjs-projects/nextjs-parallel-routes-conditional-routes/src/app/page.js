'use client'; // Add this at the top

import { auth } from '@/lib/auth';

export default function Home() {
  const isAuthenticated = auth.isAuthenticated; // Use property, not function

  if (isAuthenticated) {
    return null; // Dashboard will be shown through parallel route
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Parallel Routes Demo
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          This demonstrates Next.js Parallel Routes with Conditional Authentication.
          Try logging in with any email and password!
        </p>
        <div className="space-x-4">
          <a
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </a>
          <a
            href="/register"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Register
          </a>
        </div>
      </div>
    </main>
  );
}
