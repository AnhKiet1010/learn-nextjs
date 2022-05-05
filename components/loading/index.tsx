import { css } from '@emotion/react'
import { Box } from '@mui/material'
import { RingLoader } from 'react-spinners'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #ff83a9;
`

export function Loading() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
      }}
    >
      <RingLoader color={'#ff83a9'} loading={true} css={override} size={80} />
    </Box>
  )
}
