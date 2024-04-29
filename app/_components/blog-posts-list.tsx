import Link from "next/link";


type PropsType = {
  posts: [];
}
export const BlogPostsList = ({ posts }: PropsType) => {
  return (
    <ul>
      {posts?.map(({ date, title, slug }) => (
        <li>
          <Link href={`/blogs/${slug}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
