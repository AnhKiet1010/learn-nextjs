import { AdminLayout } from '@/components/layout'
import { Box, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Header = dynamic(() => import('@/components/common'), { ssr: false })

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter()
  const [postList, setPostList] = useState([])
  const page = router.query?.page

  useEffect(() => {
    if (!page) return
    ;(async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
      const data = await response.json()

      setPostList(data.data)
    })()
  }, [page])

  function handleNextPage() {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (Number(page) || 0) + 1,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div>
      <Header />
      <Box>
        <Typography component="h1" variant="h3" color="primary.main">
          About Page
        </Typography>
        <ul>
          {postList.map((post: any, idx) => (
            <li key={idx}>
              <Link href={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={handleNextPage}>next page</button>
      </Box>
    </div>
  )
}

AboutPage.Layout = AdminLayout

// export const getServerSideProps = () => {
//   return {
//     props: {},
//   }
// }
