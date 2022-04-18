import React from 'react'

interface HeaderProps {}

export default function Header(props: HeaderProps) {
  console.log('render header')

  return (
    <>
      <h1>Header</h1>
    </>
  )
}
