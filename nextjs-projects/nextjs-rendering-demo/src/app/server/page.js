// Server Component (default in Next.js)
export const revalidate = 10; // Enables ISR (static + revalidate every 10s)

async function getStaticData() {
  return { time: new Date().toISOString(), type: "Static Rendering" };
}

async function getDynamicData() {
  const res = await fetch("https://gateway.timeapi.world/timezone/America/New_York", {
    cache: "no-store", // disables caching => dynamic rendering
  });
  const data = await res.json();
  return { time: data.datetime, type: "Dynamic Rendering" };
}

export default async function ServerPage() {
  const staticData = await getStaticData();
  const dynamicData = await getDynamicData();

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Server Rendering Examples</h1>

      <div className="border p-4 rounded bg-gray-50">
        <h2 className="font-semibold">{staticData.type}</h2>
        <p>Time: {staticData.time}</p>
        <p>Revalidates every 10 seconds</p>
      </div>

      <div className="border p-4 rounded bg-gray-50">
        <h2 className="font-semibold">{dynamicData.type}</h2>
        <p>Time: {dynamicData.time}</p>
        <p>Fetched fresh on every request</p>
      </div>
    </div>
  );
}
