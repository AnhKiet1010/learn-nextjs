import { Box, Stack, Link as MuiLink, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import FacebookIcon from '@/images/fb.svg'
import InstaIcon from '@/images/insta.svg'
import TwitterIcon from '@/images/twitter.svg'
import LinkedinIcon from '@/images/linkedin.svg'
import Link from 'next/link'

export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <Box component="footer" py={2} textAlign="center" my={4}>
      <Stack direction={'row'} spacing={2} justifyContent={'center'}>
        <Link href="/" passHref>
          <MuiLink>
            <Image src={FacebookIcon} />
          </MuiLink>
        </Link>
        <Link href="/" passHref>
          <MuiLink>
            <Image src={InstaIcon} />
          </MuiLink>
        </Link>
        <Link href="/" passHref>
          <MuiLink>
            <Image src={TwitterIcon} />
          </MuiLink>
        </Link>
        <Link href="/" passHref>
          <MuiLink>
            <Image src={LinkedinIcon} />
          </MuiLink>
        </Link>
      </Stack>
      <Typography variant="body1" mt={1.5}>
        Copyright ©2020 All rights reserved{' '}
      </Typography>
    </Box>
  )
}
