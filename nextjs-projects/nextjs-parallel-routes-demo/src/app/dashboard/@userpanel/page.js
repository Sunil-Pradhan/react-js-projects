'use client';

import { useAuth } from "@/app/auth-context";

// import { useAuth } from '../../../auth-context';

export default function UserPanel() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-2">User Panel</h3>
      {isAuthenticated ? (
        <div>
          <p className="text-sm mb-2">Welcome back, User!</p>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-red-500 text-white px-3 py-1 rounded text-sm"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="text-sm mb-2">Please login to continue</p>
          <button
            onClick={() => setIsAuthenticated(true)}
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
