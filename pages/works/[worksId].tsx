import React from 'react'
import useSWR from 'swr'
import Head from 'next/head'
import { useRouter } from 'next/router'
import MetaTags from '@/components/meta/MetaTags'
import { Box } from '@mui/system'
import { Chip, Container, Skeleton, Stack, Typography } from '@mui/material'
import { MainLayout } from '@/components/layout'
import { format } from 'date-fns'
import LazyImage from '@/components/shared/LazyImage'

interface WorksDetailProps {}

export default function WorksDetail({}: WorksDetailProps) {
  const router = useRouter()
  const { worksId } = router.query
  const { data, error } = useSWR(`/posts/${worksId}`, {
    revalidateOnFocus: false,
    dedupingInterval: 60 * 60 * 1000,
  })

  if (error) return <div>failed to load</div>
  if (!data)
    return (
      <Container>
        <Stack direction="column" spacing={2} mt={4}>
          <Skeleton variant="rectangular" width="100%" height={40} />
          <Stack direction="row" spacing={2}>
            <Skeleton variant="rectangular" width={80} height={40} />
            <Skeleton variant="rectangular" width={'100%'} height={40} />
          </Stack>
          <Skeleton variant="rectangular" width="100%" height={200} />
        </Stack>
      </Container>
    )
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <MetaTags
          title={data.title}
          description={data.description}
          URL={`/${data.id}`}
          imageURL={`/${data.imageUrl}`}
        />
      </Head>
      <Container>
        <Box>
          <Typography variant="h3">{data.title}</Typography>
          <Stack direction={'row'} spacing={1.5} my={2} alignItems={'center'}>
            <Chip label={format(Number(data.createdAt), 'yyyy')} color="secondary" size="small" />
            <Typography variant="h6">{data.author}</Typography>
          </Stack>
          <Typography variant="body1" sx={{ mb: 6 }}>
            {data.description}
          </Typography>
          <Box width={{ xs: '100%' }} sx={{ overflow: 'hidden' }}>
            <LazyImage src={`${data.imageUrl}`} alt={data.title} />
          </Box>
        </Box>
      </Container>
    </>
  )
}

WorksDetail.Layout = MainLayout
