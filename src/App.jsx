import Info from './components/info/Info'
import EmailButton from './components/info/EmailButton'
import LinkedinButton from './components/info/LinkedinButton'
import Interests from './components/Interests'
import Footer from './components/Footer'
import About from './components/About'
import profileImg from "./assets/profile-photo.jpeg"
import "./app.css"

function App() {
    return (
        <div className='app-container'>
            <img className="info--profile-img"src={profileImg}/>
            <div className='app--content'>
                < Info />
                <div className='app--btn'>
                    <span className="app--btn-left">< EmailButton /></span>
                    < LinkedinButton />
                </div>
                < About />
                < Interests />
            </div>
            < Footer /> 
        </div>
    )

}

export default App
