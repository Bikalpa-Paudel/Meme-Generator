import Troll from "../images/Troll-Face.png"
import "./Header.css"
export default function Header() {
    return (
        <header className="header">
            <img 
                src={Troll} 
                className="header--image"
                alt="troll face logo"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}