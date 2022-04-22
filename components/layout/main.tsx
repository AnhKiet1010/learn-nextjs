import { LayoutProps } from '@/models/index'
import Link from 'next/link'
import React from 'react'

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>MainLayout</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <div>{children}</div>
    </div>
  )
}
