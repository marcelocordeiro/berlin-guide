'use client'

import { createTheme } from '@mui/material/styles'
import { Syne, Inter } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  weight: ['700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const expressiveBorderRadius = 20

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: expressiveBorderRadius,
        textTransform: 'uppercase',
        fontWeight: 700,
        padding: '12px 24px',
      },
    },
  },
  MuiFab: {
    styleOverrides: {
      root: {
        borderRadius: expressiveBorderRadius, // Squircle shape
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: expressiveBorderRadius,
      },
    },
  },
}

const typography = {
  fontFamily: inter.style.fontFamily,
  h1: {
    fontFamily: syne.style.fontFamily,
    fontWeight: 700,
    fontSize: '3rem',
  },
  h2: {
    fontFamily: syne.style.fontFamily,
    fontWeight: 700,
    fontSize: '2.5rem',
  },
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#005ac0' },
    secondary: { main: '#565f71' },
    error: { main: '#ba1a1a' },
    background: {
      default: '#fdfcff',
      paper: '#fdfcff',
    },
    text: {
      primary: '#1a1c1e',
      secondary: '#44474f',
    },
  },
  typography,
  components,
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#adc6ff' },
    secondary: { main: '#bec6dc' },
    error: { main: '#ffb4ab' },
    background: {
      default: '#1a1c1e',
      paper: '#1a1c1e',
    },
    text: {
      primary: '#e3e2e6',
      secondary: '#c4c6cf',
    },
  },
  typography,
  components,
})

export { lightTheme, darkTheme }
