export default function AnalyticsOverview() {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Analytics Overview
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800">Total Visitors</p>
          <p className="text-2xl font-bold text-blue-900">12,456</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-800">Conversion Rate</p>
          <p className="text-2xl font-bold text-green-900">24.3%</p>
        </div>
      </div>
    </div>
  );
}
