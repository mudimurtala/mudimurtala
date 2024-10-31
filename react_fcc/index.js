
import React from "react"
import ReactDOM from "react-dom/client"

const navbar = (
    <nav>
        <h1>Mudi's Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Menu</li>
        </ul>
    </nav>
)

ReactDOM.createRoot(document.getElementById("root")).render(navbar)