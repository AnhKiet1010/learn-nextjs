import { useRouter } from 'next/router'
import React from 'react'

export interface PostDetailageProps {}

export default function PostDetailage(props: PostDetailageProps) {
  const router = useRouter()

  return (
    <>
      <div>Post Detail Page</div>
      <p>Query: {JSON.stringify(router.query)}</p>
    </>
  )
}
