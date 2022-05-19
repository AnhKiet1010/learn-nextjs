import { Post } from '@/models'
import { Card, Divider, Link as MuiLink, Stack, Typography } from '@mui/material'
import { format } from 'date-fns'
import Link from 'next/link'
import * as React from 'react'

export interface PostCardInterface {
  post: Post
}

export function PostsCard({ post }: PostCardInterface) {
  if (!post) return null
  const { id, title, tagList, description } = post
  return (
    <Card
      component="section"
      sx={{
        backgroundColor: '#fff',
        padding: '22px 26px',
      }}
    >
      <Link href={`/blog/${id}`} passHref>
        <MuiLink>
          <Typography component="h1" variant="h5" fontWeight="bold">
            {title}
          </Typography>
        </MuiLink>
      </Link>
      <Stack direction={'row'} my={2}>
        <Typography variant="body1">{format(Number(post.publishDate), 'dd MMM yyyy')}</Typography>
        <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
        <Typography variant="body1">{tagList.join(', ')}</Typography>
      </Stack>
      <Typography variant="body2">{description}</Typography>
    </Card>
  )
}
