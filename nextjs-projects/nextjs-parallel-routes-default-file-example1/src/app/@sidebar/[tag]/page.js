import Link from 'next/link';

export default function SidebarTag({ params }) {
  const { tag } = params;
  return (
    <nav className="space-y-2">
      <h2 className="font-semibold mb-2">Tag: #{tag}</h2>
      <Link className="block text-blue-600 hover:underline" href="/react">
        #react
      </Link>
      <Link className="block text-blue-600 hover:underline" href="/next">
        #next
      </Link>
      <hr />
      <Link className="text-sm text-gray-500" href="/">
        ← back home
      </Link>
    </nav>
  );
}
