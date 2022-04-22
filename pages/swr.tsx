import { StudentDetail } from '@/components/swr/StudentDetail'
import React from 'react'

export default function SWRPage() {
  return (
    <div>
      <div>SWR playground</div>
      <ul>
        <li>
          <StudentDetail studentId="sktwi1cgkkuif36f3" />
        </li>
        <li>
          <StudentDetail studentId="sktwi1cgkkuif36f3" />
        </li>
        <li>
          <StudentDetail studentId="sktwi1cgkkuif36f3" />
        </li>
      </ul>
    </div>
  )
}
