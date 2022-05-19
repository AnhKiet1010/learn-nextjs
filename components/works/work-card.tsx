import { Work } from '@/models'
import { Box, Chip, Link as MuiLink, Stack, Typography } from '@mui/material'
import { format } from 'date-fns'
import Link from 'next/link'
import React from 'react'
import LazyImage from '../shared/LazyImage'

export interface worksCardInterface {
  work: Work
}

export function WorksCard({ work }: worksCardInterface) {
  if (!work) return null
  const { id, title, author, description, createdAt, imageUrl } = work
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
      }}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
        <Box
          width={{ xs: '100%', sm: '246px' }}
          height={'180px'}
          sx={{ borderRadius: 2, overflow: 'hidden' }}
          flexShrink={0}
        >
          <LazyImage src={`${imageUrl}`} alt={title} />
        </Box>
        <Box>
          <Link href={`/works/${id}`} passHref>
            <MuiLink>
              <Typography component="h1" variant="h5" fontWeight="bold">
                {title}
              </Typography>
            </MuiLink>
          </Link>
          <Stack direction={'row'} spacing={1.5} my={2} alignItems={'center'}>
            <Chip label={format(Number(createdAt), 'yyyy')} color="secondary" size="small" />
            <Typography variant="body1" color="text.secondary">
              {author}
            </Typography>
          </Stack>
          <Typography variant="body1">{description}</Typography>
        </Box>
      </Stack>
    </Box>
  )
}
