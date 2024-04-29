import { getAllPosts } from '../../utils/posts';
import { BlogPostsList } from '@/app/_components/blog-posts-list'

const BlogPosts = () => {
  const allPosts = getAllPosts();
  return (
    <div>
      <h1>Hello Blog Posts</h1>
      <BlogPostsList posts={allPosts} />
    </div>
  )
}

export default BlogPosts;
