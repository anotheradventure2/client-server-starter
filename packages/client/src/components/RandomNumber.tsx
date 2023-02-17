import Refresh from '@mui/icons-material/Refresh'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export const RandomNumber = ({
  loading,
  randomNumber,
  error,
  onRefreshClicked,
}: {
  loading: boolean
  randomNumber: number | undefined
  error: Error | undefined
  onRefreshClicked: () => void
}) => (
  <Stack spacing={2}>
    <Typography>
      {loading && 'Loading...'}
      {error && `Error: ${error.message}`}
      {randomNumber && `Random Number: ${randomNumber}`}
    </Typography>
    <Box>
      <Button startIcon={<Refresh />} variant="contained" onClick={onRefreshClicked}>
        New Random Number
      </Button>
    </Box>
  </Stack>
)
