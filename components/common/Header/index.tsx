import React from 'react'
import { HeaderDesktop } from './header-desktop'
import { HeaderMobile } from './header-mobile'

export interface HeaderProps {}

export function Header() {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  )
}
