// Simulate fetching a single blog post
async function getPost(id) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  const posts = {
    1: { id: 1, title: "First Post", content: "This is the full content of my first blog post." },
    2: { id: 2, title: "Second Post", content: "This is the full content of my second blog post." },
    3: { id: 3, title: "Third Post", content: "This is the full content of my third blog post." },
  };

  return posts[id];
}

export default async function BlogDetailPage({ params }) {
  const post = await getPost(params.id);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
