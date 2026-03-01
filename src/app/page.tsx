'use client'

import {
  Container,
  Box,
  Typography,
  Card,
  FormControl,
  FormLabel,
  Slider,
  Button,
} from '@mui/material'

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
          Create Your Kiez Tour
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
          Tell us what you&apos;re looking for, and we&apos;ll craft the perfect
          walking tour for you.
        </Typography>

        <Card sx={{ p: 4, width: '100%' }}>
          <Box component="form" noValidate autoComplete="off">
            <FormControl fullWidth sx={{ mb: 4 }}>
              <FormLabel sx={{ mb: 1, fontWeight: '700' }}>
                Tour Duration (hours)
              </FormLabel>
              <Slider
                defaultValue={3}
                aria-labelledby="tour-duration-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={8}
              />
            </FormControl>

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" size="large">
                Generate Tour
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </Container>
  )
}
