import Troll from "../images/Troll-Face.png"
import "./Header.css"
export default function Header(){
    return(  
        <header className="header">
            <div className="nav">
                <img className="troll" src={Troll} alt="troll face" />
                <div className="navText">Meme Generator</div>
            </div>
        </header>
        
    )
}