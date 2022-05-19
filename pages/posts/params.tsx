import React from 'react'

export interface ParamsProps {}

export default function ParamsPage() {
  return (
    <>
      <div>Params Page</div>
    </>
  )
}

export const getServerSideProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return {
    props: {},
  }
}
