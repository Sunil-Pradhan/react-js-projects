export const metadata = {
  title: {
    default: 'Blog',
    template: '%s | My Awesome Blog',
  },
  description: 'Read our latest blog posts and articles',
}

export default function BlogLayout({ children }) {
  return (
    <div>
      <h1>Blog Section</h1>
      {children}
    </div>
  )
}
