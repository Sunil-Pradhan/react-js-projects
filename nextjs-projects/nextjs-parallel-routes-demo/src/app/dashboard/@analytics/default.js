'use client';

import { useAuth } from "@/app/auth-context";

// import { useAuth } from '../../../auth-context';

export default function AnalyticsSlot() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-2">Analytics</h3>
        <p className="text-sm text-gray-500">Please login to view analytics</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
      <div className="space-y-2">
        <p className="text-sm">Page Views: 12,345</p>
        <p className="text-sm">Conversion Rate: 3.2%</p>
        <p className="text-sm">Bounce Rate: 42%</p>
      </div>
    </div>
  );
}
