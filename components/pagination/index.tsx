import { Pagination as MuiPagination, Box } from '@mui/material'

export interface PaginationProps {
  count: number
  handleChange: (...args: any[]) => any
}

export function Pagination({ count, handleChange }: PaginationProps) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {count > 1 && <MuiPagination count={count} color="primary" onChange={handleChange} />}
    </Box>
  )
}
