import Link from "next/link";

export default function UsersAnalytics() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">User Analytics</h3>
      <nav className="mb-3">
        <div className="flex space-x-2 text-sm">
          <Link href="/dashboard/users/overview" className="text-blue-600 hover:underline">
            Overview
          </Link>
          <Link href="/dashboard/users/detailed" className="text-blue-600 hover:underline">
            Detailed
          </Link>
        </div>
      </nav>
      <div className="space-y-2">
        <p className="text-sm">Total Users: 1,234</p>
        <p className="text-sm">Active Today: 567</p>
      </div>
    </div>
  );
}
