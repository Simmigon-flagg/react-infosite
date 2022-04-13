import React from "react"
import "./app.css" 
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import MainContent from "../src/components/MainContent"

const App = () => {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App;