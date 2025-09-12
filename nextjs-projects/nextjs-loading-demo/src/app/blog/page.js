// Simulate fetching blog posts
async function getPosts() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return [
    { id: 1, title: "First Post", excerpt: "This is my first blog post" },
    { id: 2, title: "Second Post", excerpt: "This is my second blog post" },
    { id: 3, title: "Third Post", excerpt: "This is my third blog post" },
  ];
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={`/blog/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
