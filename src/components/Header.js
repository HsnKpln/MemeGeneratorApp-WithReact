import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="../public/images/meme-generator-logo.png"
                className="header-image"
            />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">Add a new image & Enjoy</h4>
        </header>
    )
}