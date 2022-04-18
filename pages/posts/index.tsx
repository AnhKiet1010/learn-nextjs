import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

export interface PostListPageProps {
  posts: any[]
}

export default function Posts({ posts }: PostListPageProps) {
  return (
    <>
      <h1>Post list :</h1>
      <ul>
        {posts.map((post, idx) => (
          <li key={idx}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()

  console.log(data)

  return {
    props: {
      posts: data.data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  }
}
