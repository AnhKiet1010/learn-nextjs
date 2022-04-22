import { LayoutProps } from '@/models/index'
import { Container, Stack } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import { Footer, Header } from '../common'

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        <Container maxWidth="sm" sx={{ backgroundColor: 'primary.main' }}>
          CONATINER
        </Container>
        <Container maxWidth="md" sx={{ backgroundColor: 'primary.main' }}>
          CONATINER
        </Container>
        {children}
      </Box>

      <Footer />
    </Stack>
  )
}
