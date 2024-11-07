import React from "react"


export default function Header() {
    return (
        <header>
                <nav className='nav'>
                    <img src="logo512.png" className='nav-logo' alt="react logo" />
                    <ul className='nav-items'>
                      <li>Pricing</li>
                      <li>About</li>
                      <li>Contact</li>
                    </ul>
                </nav>
        </header>
    )
}