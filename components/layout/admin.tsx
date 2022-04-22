import { useAuth } from '@/hooks'
import { LayoutProps } from '@/models/index'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Auth from '../common/auth'

export function AdminLayout({ children }: LayoutProps) {
  const router = useRouter()
  const { logout, profile } = useAuth()

  async function handleLogoutClick() {
    try {
      await logout()
      console.log('redirect to login page')
      router.push('/login')
    } catch (error) {
      console.log('failed to logout', error)
    }
  }

  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>
      <p>Profile : {JSON.stringify(profile || {}, null, 4)}</p>
      <button onClick={handleLogoutClick}>logout</button>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <div>{children}</div>
    </Auth>
  )
}
