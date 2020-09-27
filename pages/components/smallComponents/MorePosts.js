import PostPreview from './PostPreview'

export default function MoreStories({ posts }) {
  return (
    <section className="more-posts">
      <h2 className="subtitle">
        More Stories
      </h2>
      <div className="posts-container">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}