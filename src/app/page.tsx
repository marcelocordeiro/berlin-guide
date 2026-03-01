'use client'

import { useState } from 'react'
import {
  Container,
  Box,
  Typography,
  Card,
  FormControl,
  FormLabel,
  FormControlLabel,
  Slider,
  Button,
  Stack,
  TextField,
  Switch,
  Chip,
} from '@mui/material'

interface TourPreferences {
  duration: number
  distance: number
  startTime: string
  isMultiDay: boolean
  includeMeals: boolean
  mealDuration: number
  interests: string[]
}

const INTEREST_OPTIONS = [
  'History',
  'Art',
  'Food',
  'Architecture',
  'Nightlife',
  'Local Gems',
]

export default function Home() {
  const [prefs, setPrefs] = useState<TourPreferences>({
    duration: 3,
    distance: 10,
    startTime: '10:00',
    isMultiDay: false,
    includeMeals: false,
    mealDuration: 1,
    interests: ['History'],
  })

  const handleInterestClick = (interest: string) => {
    setPrefs((prev) => {
      const newInterests = prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest]
      return { ...prev, interests: newInterests }
    })
  }

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

        <Card sx={{ p: 4, width: '100%' }}>
          <Box component="form" noValidate autoComplete="off">
            <Stack spacing={4}>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 1, fontWeight: '700' }}>
                  Tour Duration (hours)
                </FormLabel>
                <Slider
                  value={prefs.duration}
                  onChange={(e, value) =>
                    setPrefs({ ...prefs, duration: value as number })
                  }
                  aria-labelledby="tour-duration-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={1}
                  max={8}
                />
              </FormControl>

              <FormControl fullWidth>
                <FormLabel sx={{ mb: 1, fontWeight: '700' }}>
                  Max Walking Distance (km)
                </FormLabel>
                <Slider
                  value={prefs.distance}
                  onChange={(e, value) =>
                    setPrefs({ ...prefs, distance: value as number })
                  }
                  aria-labelledby="distance-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={2}
                  max={20}
                />
              </FormControl>

              <FormControl>
                <FormLabel sx={{ mb: 1, fontWeight: '700' }}>
                  Ideal Start Time
                </FormLabel>
                <TextField
                  type="time"
                  value={prefs.startTime}
                  onChange={(e) =>
                    setPrefs({ ...prefs, startTime: e.target.value })
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </FormControl>

              <Box>
                <FormControlLabel
                  control={
                    <Switch
                      checked={prefs.isMultiDay}
                      onChange={(e) =>
                        setPrefs({ ...prefs, isMultiDay: e.target.checked })
                      }
                    />
                  }
                  label="Split across multiple days?"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={prefs.includeMeals}
                      onChange={(e) =>
                        setPrefs({ ...prefs, includeMeals: e.target.checked })
                      }
                    />
                  }
                  label="Include a meal break?"
                />
              </Box>

              {prefs.includeMeals && (
                <FormControl fullWidth>
                  <FormLabel sx={{ mb: 1, fontWeight: '700' }}>
                    Meal Break Duration (hours)
                  </FormLabel>
                  <Slider
                    value={prefs.mealDuration}
                    onChange={(e, value) =>
                      setPrefs({ ...prefs, mealDuration: value as number })
                    }
                    aria-labelledby="meal-duration-slider"
                    valueLabelDisplay="auto"
                    step={0.5}
                    marks
                    min={1}
                    max={3}
                  />
                </FormControl>
              )}

              <FormControl fullWidth>
                <FormLabel sx={{ mb: 1, fontWeight: '700' }}>
                  I&apos;m interested in...
                </FormLabel>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {INTEREST_OPTIONS.map((interest) => (
                    <Chip
                      key={interest}
                      label={interest}
                      onClick={() => handleInterestClick(interest)}
                      variant={
                        prefs.interests.includes(interest)
                          ? 'filled'
                          : 'outlined'
                      }
                      color="primary"
                    />
                  ))}
                </Box>
              </FormControl>

              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" size="large">
                  Generate Tour
                </Button>
              </Box>
            </Stack>
          </Box>
        </Card>
      </Box>
    </Container>
  )
}
