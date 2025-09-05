// Dynamic metadata function
export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug)

  return {
    title: post.title,
    description: post.excerpt,
  }
}

// Mock function
async function getBlogPost(slug) {
  const posts = {
    'first-post': {
      title: 'First Blog Post',
      excerpt: 'This is the first amazing blog post',
      content: 'Full content of the first post...'
    },
    'second-post': {
      title: 'Second Blog Post',
      excerpt: 'Another fantastic blog post',
      content: 'Full content of the second post...'
    }
  }

  return posts[slug] || { title: 'Post Not Found', excerpt: '', content: '' }
}

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.slug)

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}
