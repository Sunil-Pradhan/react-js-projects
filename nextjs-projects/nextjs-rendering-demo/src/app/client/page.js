"use client"; // This makes it a Client Component

import { useState } from "react";

export default function ClientPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Client Component Example</h1>
      <p>Client components can use state, effects, and event handlers.</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Clicked {count} times
      </button>
    </div>
  );
}
