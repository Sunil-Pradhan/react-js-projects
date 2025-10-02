export default function Notifications() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Notifications</h3>
      <div className="space-y-2 text-sm">
        <div className="p-2 bg-yellow-50 rounded">System update scheduled</div>
        <div className="p-2 bg-blue-50 rounded">New user signed up</div>
        <div className="p-2 bg-green-50 rounded">Revenue target achieved</div>
      </div>
    </div>
  );
}
