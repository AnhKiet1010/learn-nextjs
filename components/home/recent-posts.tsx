import { Post } from '@/models'
import { Box, Container, Link as MuiLink, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import * as React from 'react'
import { PostsCard } from './post-card'

export function RecentPosts() {
  const postList: Post[] = [
    {
      id: 1,
      title: 'Making a design system from scratch',
      publishDate: '1651112188036',
      tagList: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: 2,
      title: 'Creating pixel perfect icons in Figma',
      publishDate: '1651112188036',
      tagList: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ]
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'secondary.light',
        padding: '32px 0',
      }}
    >
      <Container>
        <Stack
          direction={'row'}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems={'center'}
          mb={2}
        >
          <Typography variant="h5">Recent Posts</Typography>
          <Link href="/blog" passHref>
            <MuiLink underline="hover" sx={{ display: { xs: 'none', md: 'inline-block' } }}>
              View all
            </MuiLink>
          </Link>
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          sx={{
            '& > div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostsCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
