export default function Preferences() {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Preferences
      </h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Email Notifications</span>
          <input type="checkbox" className="rounded" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Dark Mode</span>
          <input type="checkbox" className="rounded" />
        </div>
      </div>
    </div>
  );
}
