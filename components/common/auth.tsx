import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export interface AuthProps {
  children: any
}

export default function Auth({ children }: AuthProps) {
  const router = useRouter()
  const { profile, firstLoading } = useAuth()

  useEffect(() => {
    if (!firstLoading && !profile?.username) router.push('/login')
  }, [router, profile, firstLoading])

  if (!profile?.username) return <div>Loading...</div>

  return <div>{children}</div>
}
