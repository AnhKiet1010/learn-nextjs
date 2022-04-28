import { Work } from '@/models'
import { Box, Divider, Stack } from '@mui/material'
import React from 'react'
import { WorksCard } from './work-card'

export interface WorksListProps {
  worksList: Work[]
}

export function WorksList({ worksList }: WorksListProps) {
  return (
    <Box>
      <Stack direction={'column'}>
        {worksList.map((work) => (
          <Box key={work.id}>
            <WorksCard work={work} />
            <Divider sx={{ mt: 2, mb: 4, bgColor: '#E0E0E0' }} />
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
