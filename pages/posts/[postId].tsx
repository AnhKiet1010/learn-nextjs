import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

export interface PostProps {
  post: any
}

export default function PostDetail({ post }: PostProps) {
  const router = useRouter()
  if (router.isFallback) {
    return <div style={{ fontSize: '2rem', textAlign: 'center' }}>Loading...</div>
  }
  return (
    <>
      <div>Post Detail Page</div>
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.description}</p>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('\n GET STATIC PATH')

  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()

  const paths = data.data.map((post: any) => ({ params: { postId: post.id } }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<PostProps> = async (context: GetStaticPropsContext) => {
  console.log('\n GET STATIC PROPS', context.params?.postId)

  const postId = context.params?.postId

  if (!postId) return { notFound: true }

  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
  const data = await response.json()

  console.log(data)

  return {
    props: {
      post: data,
    },
    revalidate: 5,
  }
}
