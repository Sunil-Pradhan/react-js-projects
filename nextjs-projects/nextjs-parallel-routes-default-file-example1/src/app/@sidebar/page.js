import Link from 'next/link';

export default function SidebarDefault() {
  return (
    <nav className="space-y-2">
      <h2 className="font-semibold mb-2">Pick a tag</h2>
      <Link className="block text-blue-600 hover:underline" href="/react">
        #react
      </Link>
      <Link className="block text-blue-600 hover:underline" href="/next">
        #next
      </Link>
    </nav>
  );
}
