import { LinkedIn } from '@mui/icons-material'
import { Button } from '@mui/material'

export default function LinkedinButton(){

    return(
        <Button
            variant='contained'
            color='primary'
            startIcon={<LinkedIn/>}
            style={{
                backgroundColor: '#5093E2',
                color: '#FFFFFF'
            }}
            href='https://www.linkedin.com/in/wallacebmendes/'
            target="_blank"
        >
            Linkedin
        </Button>
    )
}