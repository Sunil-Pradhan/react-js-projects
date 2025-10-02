export default function DashboardLayout({ children, users, revenue, notifications }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Users Slot */}
          <div className="bg-white rounded-lg shadow p-6">
            {users}
          </div>

          {/* Revenue Slot */}
          <div className="bg-white rounded-lg shadow p-6">
            {revenue}
          </div>

          {/* Notifications Slot */}
          <div className="bg-white rounded-lg shadow p-6">
            {notifications}
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-6 bg-white rounded-lg shadow p-6">
          {children}
        </div>
      </main>

      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-gray-600">Dashboard Footer</p>
        </div>
      </footer>
    </div>
  );
}
