import { authApi } from '@/api-client'
import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'
import React from 'react'

export default function LoginPage() {
  const router = useRouter()
  const { profile, login } = useAuth({
    revalidateOnMount: false,
  })

  async function handleLoginClick() {
    try {
      await login()
      console.log('redirect to dashboard')
      router.push('/about')
    } catch (error) {
      console.log('failed to login', error)
    }
  }

  async function handleGetProfileClick() {
    try {
      await authApi.getProfile()
    } catch (error) {
      console.log('failed get profile', error)
    }
  }

  return (
    <div>
      <div>Login page</div>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get profile</button>
    </div>
  )
}
