export default function TagPage({ params }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Posts tagged #{params.tag}</h1>
      <p className="mt-2 text-gray-600">
        (This is the main page for tag <strong>{params.tag}</strong>)
      </p>
    </div>
  );
}
