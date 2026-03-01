'use client'

import dynamic from 'next/dynamic'
import { Container, Box, Typography, CircularProgress } from '@mui/material'
import { Suspense } from 'react'

const ClientOnlyForm = dynamic(() => import('@/components/ClientOnlyForm'), {
  ssr: false,
})

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        suppressHydrationWarning={true}
      >
        <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
          Create Your Kiez Tour
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
          Tell us what you&apos;re looking for, and we&apos;ll craft the perfect
          walking tour for you.
        </Typography>

        <Suspense
          fallback={
            <Box sx={{ p: 4, width: '100%', textAlign: 'center' }}>
              <CircularProgress />
              <Typography variant="body2" sx={{ mt: 2 }}>
                Loading form...
              </Typography>
            </Box>
          }
        >
          <ClientOnlyForm />
        </Suspense>
      </Box>
    </Container>
  )
}
