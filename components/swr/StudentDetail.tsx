import React from 'react'
import useSWR from 'swr'
import Head from 'next/head'

interface StudentDetailProps {
  studentId: string
}

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, mutate } = useSWR(`/students/${studentId}`, {
    revalidateOnFocus: false,
    dedupingInterval: 60 * 60 * 1000,
  })

  function handleMutate() {
    mutate({ name: 'anh kiet' }, false)
  }

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>{data?.name || '--'}</div>
      <button onClick={handleMutate}>mutate</button>
    </>
  )
}
