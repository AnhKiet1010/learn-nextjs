import { MainLayout } from '@/components/layout'
import React from 'react'

export interface BlogPageProps {
  data: string
}

export default function BlogPage({}: BlogPageProps) {
  return <div>Blog Page</div>
}

BlogPage.Layout = MainLayout
