import { EmailRounded } from '@mui/icons-material'
import { Button } from '@mui/material'

export default function EmailButton(){

    return(
        <Button
            variant='contained'
            color='primary'
            startIcon={<EmailRounded/>}
            style={{
                backgroundColor: '#FFFFFF',
                color: '#1E1F26'
            }}
            href='mailto:wallace.bmj@gmail.com'
        >
            Email
        </Button>
    )
}