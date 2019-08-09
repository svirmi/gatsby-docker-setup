import React from "react";

import Layout from "../components/layout"

import { Link } from "gatsby";

const AboutPage = () => {
    return (
        <Layout>
            <h1>About page</h1>
            <h2>About INFO page</h2>
            <p><Link to="/">Link to Index page</Link></p>
        </Layout>
    )
}

export default AboutPage