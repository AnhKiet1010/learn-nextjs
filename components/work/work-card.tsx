import { Work } from '@/models'
import { Box, Chip, Link as MuiLink, Stack, Typography } from '@mui/material'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface worksCardInterface {
  work: Work
}

export function WorksCard({ work }: worksCardInterface) {
  if (!work) return null
  const { id, title, shortDescription, tagList, fullDescription, createdAt, updatedAt, image } =
    work
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
      }}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Box
          width={{ xs: '100%', sm: '246px' }}
          sx={{ borderRadius: 2, overflow: 'hidden' }}
          flexShrink={0}
        >
          <Image src={image} layout="responsive" width={240} height={180} alt="avatar" priority />
        </Box>
        <Box>
          <Link href={`/blog/${id}`} passHref>
            <MuiLink>
              <Typography component="h1" variant="h5" fontWeight="bold">
                {title}
              </Typography>
            </MuiLink>
          </Link>
          <Stack direction={'row'} spacing={1.5} my={2} alignItems={'center'}>
            <Chip label={format(Number(createdAt), 'yyyy')} color="secondary" size="small" />
            <Typography variant="body1" color="text.secondary">
              {tagList.join(', ')}
            </Typography>
          </Stack>
          <Typography variant="body1">{fullDescription}</Typography>
        </Box>
      </Stack>
    </Box>
  )
}
