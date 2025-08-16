export default function NotesLayout({ children }) {
  return (
    <div>
      {/* Any layout-specific elements (headers, sidebars, etc) */}
      {children}  {/* This renders the child page (page.js or [id]/page.js) */}
    </div>
  );
}
