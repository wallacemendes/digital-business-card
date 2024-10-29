import { GitHub } from "@mui/icons-material"
export default function Info(){

    return(
        <div className="info--container">
            <h2 className="info--name-title">Wallace Mendes</h2>
            <p className="info--job-title">Software Developer</p>
            <a href="https://github.com/wallacemendes" target="_blank" className="info--website-link">
                <GitHub style={{
                    fontSize: 20
                }}/>
                <p>wallacemendes</p>
            </a>
        </div>
    )
}