import { GitHub, LinkedIn, Telegram} from '@mui/icons-material'

export default function Footer(){

    const style = {
                fontSize: 30,
                color: '#918E9B'
            }

    return(
        <footer>
            <a target='_blank' href='https://github.com/wallacemendes'><GitHub style={style}/></a>
            <a target='_blank' href='https://www.linkedin.com/in/wallacebmendes/'><LinkedIn style={style}/></a>
            <a target='_blank' href='https://t.me/wallacemendes'><Telegram style={style}/></a>
        </footer>
    )
}