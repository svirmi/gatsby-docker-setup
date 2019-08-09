import React from "react";

import Layout from "../components/layout"

import { Link } from "gatsby";

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello world!</h1>
            <h2>I am an INDEX Gatsby page</h2>
            <p><Link to="/contact">Link to Contact page</Link></p>
        </Layout>
    )
}

export default IndexPage
