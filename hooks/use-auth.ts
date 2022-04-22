import { authApi } from '@/api-client'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'

export function useAuth(options?: Partial<PublicConfiguration>) {
  // profile
  const {
    data: profile,
    error,
    mutate,
  } = useSWR<any>('/profile', {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  })

  console.log({ profile, error })

  const firstLoading = profile === undefined && error === undefined

  async function login() {
    await authApi.login({
      username: 'text1',
      password: '123123',
    })
    await mutate()
  }

  async function logout() {
    await authApi.logout()
    mutate({}, false)
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  }
}
