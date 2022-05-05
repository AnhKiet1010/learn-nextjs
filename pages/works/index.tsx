import { MainLayout } from '@/components/layout'
import { Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { WorksList } from '@/components/works'
import { useRouter } from 'next/router'
import { Pagination } from '@/components/pagination'

export interface WorksPageProps {}

export default function WorksPage({}: WorksPageProps) {
  const router = useRouter()
  const [worksList, setWorksList] = useState([])
  const page = router.query?.page || 1
  const pageSize = 10
  const [totalPage, setTotalPage] = useState(1)

  useEffect(() => {
    if (!page) return
    ;(async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
      const data = await response.json()
      console.log(data)
      setWorksList(data.data)
      setTotalPage(Math.ceil(data.pagination._totalRows / pageSize))
    })()
  }, [page])

  function handlePageChange(event: any, value: number) {
    console.log(value)
    router.push(
      {
        pathname: '/works',
        query: {
          page: Number(value),
        },
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <Container>
      <Typography variant="h2" sx={{ mt: { xs: 2, md: 10 }, mb: { xs: 2, md: 4 } }}>
        Work
      </Typography>
      <WorksList worksList={worksList} />
      <Pagination count={totalPage} handleChange={handlePageChange} />
    </Container>
  )
}

WorksPage.Layout = MainLayout
