import React from "react";
import { Link } from "gatsby";
import Footer from "../components/footer";

const IndexPage = () => {
    return (
        <div>
            <h1>Hello world!</h1>
            <h2>I am an INDEX Gatsby page</h2>
            <p><Link to="/contact">Link to Contact page</Link></p>
            <Footer/>
        </div>
    )
}

export default IndexPage
