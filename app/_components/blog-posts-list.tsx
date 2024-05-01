import Link from "next/link";

export const BlogPostsList = ({ posts }) => {
  return (
    <ul>
      {posts?.map(({ date, title, slug }) => (
        <li key={slug}>
          <Link href={`/blogs/${slug}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
