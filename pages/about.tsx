import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Header = dynamic(() => import('@/components/common/Header/index'), { ssr: false })

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter()
  const [postList, setPostList] = useState([])
  console.log('About query : ', router.query)
  const page = router.query?.page

  useEffect(() => {
    if (!page) return
    ;(async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
      const data = await response.json()
      console.log(data)

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
    <>
      <Header />
      <div>About Page</div>
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
    </>
  )
}

// export const getServerSideProps = () => {
//   return {
//     props: {},
//   }
// }
