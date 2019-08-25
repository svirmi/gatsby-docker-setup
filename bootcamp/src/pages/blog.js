import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout"

const BlogPage = () => {

    const data = useStaticQuery(graphql`    
        query {
                allMarkdownRemark {
                    edges {
                        node {
                            frontmatter {
                                title
                                date
                            }
                            fields {
                                slug
                            }
                            html
                            excerpt
                        }
                    }
                }
        }
    `);

    console.log(data);

    return (
        <Layout>
            <h1>Blog page</h1>
            <h2>Posts will come later</h2>
            <ol>
                {data.allMarkdownRemark.edges.map((edge, index) => {
                    return (

                        <Link to={`/blog/${edge.node.fields.slug}`}>

                        <li key={index}>
                            <h3>{edge.node.frontmatter.title}</h3>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>

                        </Link>
                    )
                })}
            </ol>
        </Layout>
    )
};

export default BlogPage