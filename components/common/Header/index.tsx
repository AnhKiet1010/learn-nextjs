import React from 'react'
import styles from './Header.module.css'

interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <div className={styles.main}>
      <h1>Header</h1>
    </div>
  )
}
