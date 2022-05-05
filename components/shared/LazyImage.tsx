import { Box } from '@mui/material'
import React, { useRef } from 'react'
import LazyLoad from 'react-lazyload'

interface Props {
  src: string
  alt: string
}

const LazyImage: React.FC<Props> = ({ src, alt }) => {
  const refPlaceholder = useRef<HTMLInputElement>(null)

  const removePlaceholder = () => {
    refPlaceholder?.current?.remove()
  }

  return (
    <>
      <Box sx={{ height: '180px' }} ref={refPlaceholder}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="animate-pulse"
          stroke="currentColor"
          height="100%"
          width="100%"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
      </Box>
      <LazyLoad offset={200}>
        <img
          src={src}
          alt={alt}
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          className="h-full w-full transform hover:scale-105 transition duration-500"
        />
      </LazyLoad>
    </>
  )
}

export default LazyImage
