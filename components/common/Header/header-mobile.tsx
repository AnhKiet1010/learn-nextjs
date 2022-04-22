import { Container, Box, Stack, Button, Link as MuiLink, Drawer } from '@mui/material'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { ROUTE_LIST } from './routes'

export interface HeaderMobileProps {}

export function HeaderMobile(props: HeaderMobileProps) {
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(false)

  function toggleDrawer() {
    setOpenMenu(!openMenu)
  }

  return (
    <Box display={{ xs: 'block', md: 'none' }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          <Button onClick={toggleDrawer}>Open</Button>
        </Stack>
      </Container>
      <Drawer open={openMenu} onClose={toggleDrawer}>
        <Stack justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            <Link key={route.path} href={route.path} passHref>
              <MuiLink
                sx={{ p: 2, width: 250, textAlign: 'center' }}
                className={clsx({ active: router.pathname === route.path })}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Drawer>
    </Box>
  )
}
