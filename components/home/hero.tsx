import * as React from 'react'
import { Box, Container, Stack, Typography, Button } from '@mui/material'
import Image from 'next/image'
import avatar from '@/images/avatar.png'

export function HeroSection() {
  return (
    <Box component={`section`} pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          spacing={8}
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
        >
          <Box textAlign={{ xs: 'center', md: 'left' }}>
            <Typography component="h1" variant="h3" fontWeight="bold" mb={{ xs: 3.5, md: 5 }}>
              Hi, I am John, <br></br>
              Creative Technologist
            </Typography>
            <Typography variant="body1" mb={5}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet
            </Typography>
            <Button variant="contained" size="large">
              Download Resume
            </Button>
          </Box>
          <Box
            sx={{
              minWidth: { xs: '180px', md: '240px' },
              borderRadius: '50%',
            }}
          >
            <Image src={avatar} layout="responsive" alt="avatar" priority />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
