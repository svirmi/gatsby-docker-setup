import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

import { Link } from "gatsby";

const AboutPage = () => {
    return (
        <div>
            <Header/>
            <h1>About page</h1>
            <h2>About INFO page</h2>
            <p><Link to="/">Link to Index page</Link></p>
            <Footer/>
        </div>
    )
}

export default AboutPage