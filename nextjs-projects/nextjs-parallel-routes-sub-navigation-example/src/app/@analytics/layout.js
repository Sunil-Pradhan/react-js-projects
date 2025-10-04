import Link from "next/link";

export default function AnalyticsLayout({children}) {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Analytics</h2>
      </div>
      <div className="flex-1 flex">
        {/* Analytics Sub-navigation */}
        <nav className="w-48 bg-gray-50 p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                href="/overview"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Analytics Overview
              </Link>
            </li>
            <li>
              <Link
                href="/users"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
              >
                User Analytics
              </Link>
            </li>
          </ul>
        </nav>

        {/* Analytics Content */}
        <div className="flex-1 p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
