import React from "react"

import Layout from "../components/layout"

import { Link } from "gatsby";

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact page</h1>
            <h2>Contact details</h2>
            <p><Link to="/">Link to Index page</Link></p>
        </Layout>
    )
}

export default ContactPage