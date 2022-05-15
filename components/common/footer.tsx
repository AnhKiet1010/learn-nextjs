import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Stack, Link as MuiLink, Typography, Icon } from '@mui/material'
import React from 'react'

export interface FooterProps {}

export function Footer(props: FooterProps) {
  const socialLinks = [
    {
      icon: Facebook,
      url: ''
    },
    {
      icon: Instagram,
      url: ''
    },
    {
      icon: Twitter,
      url: ''
    },
    {
      icon: LinkedIn,
      url: ''
    }
  ]
  return (
    <Box component="footer" py={2} textAlign="center" my={4}>
      <Stack direction={'row'} spacing={4} justifyContent={'center'}>
        {
          socialLinks.map((link, idx) => (
            <Box component='a' href={link.url} target="_blank" key={idx} rel="noopener noreferrer">
              <Icon component={link.icon} sx={{fontSize: '48px'}} />
            </Box>
          ))
        }
      </Stack>
      <Typography variant="body1" mt={1.5}>
        Copyright ©2020 All rights reserved{' '}
      </Typography>
    </Box>
  )
}
