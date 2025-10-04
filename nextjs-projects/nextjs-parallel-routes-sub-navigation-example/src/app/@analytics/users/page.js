export default function UserAnalytics() {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        User Analytics
      </h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
          <span>Active Users</span>
          <span className="font-semibold">845</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
          <span>New Signups</span>
          <span className="font-semibold">156</span>
        </div>
      </div>
    </div>
  );
}
