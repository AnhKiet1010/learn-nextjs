import { Box, Container, Stack, Link as MuiLink, IconButton } from '@mui/material'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { ROUTE_LIST } from './routes'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { theme } from '@/utils'

export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
  const router = useRouter()

  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end" alignItems={'center'}>
          {ROUTE_LIST.map((route) => {
            return (
              <Link key={route.path} href={route.path} passHref>
                <MuiLink
                  sx={{ ml: 2, fontWeight: 'medium' }}
                  className={clsx({
                    active: router.pathname.split('/')[1] === route.path.split('/')[1],
                  })}
                >
                  {route.label}
                </MuiLink>
              </Link>
            )
          })}
          <Box
            sx={{
              color: 'text.primary',
              borderRadius: 1,
            }}
          >
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                console.log(theme.palette.mode)
                theme.palette.mode === 'light'
                  ? (theme.palette.mode = 'dark')
                  : (theme.palette.mode = 'light')
              }}
              color="inherit"
            >
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
