'use client';

import { auth } from '@/lib/auth';

export default function DashboardDefault() {
  const handleLogout = () => {
    auth.logout();
    // Force full page reload to update layout
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800">Profile</h3>
            <p className="text-blue-600 mt-2">Welcome back, {auth.user?.name}!</p>
            <p className="text-blue-600">Email: {auth.user?.email}</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800">Stats</h3>
            <p className="text-green-600 mt-2">You have 5 new notifications</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-800">Recent Activity</h3>
            <p className="text-purple-600 mt-2">Last login: Today</p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800">How This Works</h3>
          <ul className="mt-2 text-yellow-700 list-disc list-inside">
            <li>Layout is server component</li>
            <li>AuthWrapper handles client-side conditional rendering</li>
            <li>Parallel routes: @auth and @dashboard</li>
            <li>Try different URLs: /, /login, /register</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
