import { Post, Work } from '@/models'
import { Box, Container, Typography } from '@mui/material'
import * as React from 'react'
import { WorksList } from '../works'

export function FeatureWorks() {
  const worksList: Work[] = [
    {
      id: 1,
      title: 'Designing Dashboards',
      author: '',
      createdAt: '1651112188036',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imageUrl: 'https://picsum.photos/800/800',
      updatedAt: '1651112188036',
    },
    {
      id: 2,
      title: 'Designing Dashboards',
      createdAt: '1651112188036',
      author: '',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imageUrl: 'https://picsum.photos/800/800',
      updatedAt: '1651112188036',
    },
    {
      id: 3,
      title: 'Designing Dashboards',
      createdAt: '1651112188036',
      author: '',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imageUrl: 'https://picsum.photos/800/800',
      updatedAt: '1651112188036',
    },
  ]
  return (
    <Box
      component="section"
      sx={{
        padding: '32px 0',
      }}
    >
      <Container>
        <Typography variant="h5" mb={2}>
          Feature works
        </Typography>
        <WorksList worksList={worksList} />
      </Container>
    </Box>
  )
}
