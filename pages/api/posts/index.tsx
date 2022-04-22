// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
  | {
      data: any[]
      pagination: any
    }
  | { name: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'GET') {
    res.status(400).json({ name: 'Not found' })
  }
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const responseJson = await response.json()

  res.status(200).json(responseJson)
}
