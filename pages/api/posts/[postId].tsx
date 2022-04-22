import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
  | {
      id: string
      title: string
      author: string
      description: string
      createdAt: string
      updatedAt: string
      imageUrl: string
    }
  | { name: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'GET') {
    res.status(400).json({ name: 'Not found' })
  }

  const { postId } = req.query
  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
  const responseJson = await response.json()

  res.status(200).json(responseJson)
}
