import React from "react"
import { Link } from "gatsby";

import Footer from "../components/footer";
import Header from "../components/header";


const ContactPage = () => {
    return (
        <div>
            <Header/>
            <h1>Contact page</h1>
            <h2>Contact details</h2>
            <p><Link to="/">Link to Index page</Link></p>
            <Footer/>
        </div>
    )
}

export default ContactPage