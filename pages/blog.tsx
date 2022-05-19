import { MainLayout } from '@/components/layout'
import React from 'react'

export interface BlogPageProps {
  data: string
}

export default function BlogPage({}: BlogPageProps) {
  return <div>Blog Page 123</div>
}

BlogPage.Layout = MainLayout
