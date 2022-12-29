import React from "react"
import "./Meme.css"
import memesData from "../memeData.js"

export default function Meme(){

    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1g8my4.jpg");
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return(
        <section className="meme">
            <div className="input">
                <input type="text" className="input1" />
                <input type="text"  className="input2" />
            </div>
            <button onClick={getMemeImage} className="btn">Get a new image</button>
            <img src={memeImage} alt="popular meme" className="memeImage" />
        </section>
    )
}