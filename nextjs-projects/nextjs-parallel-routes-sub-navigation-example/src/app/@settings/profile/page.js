export default function ProfileSettings() {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Profile Settings
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Display Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Enter your display name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Enter your email"
          />
        </div>
      </div>
    </div>
  );
}
