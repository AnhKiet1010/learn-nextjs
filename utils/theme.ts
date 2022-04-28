import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
export let theme = createTheme({
  typography: {
    fontFamily: 'Heebo, san-serif',
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthMd: {
          maxWidth: '860px',

          '@media (min-width: 900px)': {
            maxWidth: '860px',
          },
        },
        maxWidthSm: {
          maxWidth: '680px',

          '@media (min-width: 600px)': {
            maxWidth: '680px',
          },
        },
      },
      defaultProps: {
        maxWidth: 'md',
      },
      variants: [],
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: '#000',
          '&:hover, &.active': {
            color: '#ff83a9',
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: 'white',
          },
        },
      ],
    },

    MuiChip: {
      variants: [
        {
          props: { color: 'secondary' },
          style: {
            backgroundColor: '#142850',
            color: '#fff',
            fontWeight: 'bold',
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: '#ff83a9',
    },
    secondary: {
      light: '#EDF7FA',
      main: '#19857b',
      dark: '#142850',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#21243D',
      secondary: '#8695A4',
    },
  },
})

theme = responsiveFontSizes(theme)

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
}
