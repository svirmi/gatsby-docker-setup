import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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
                        <li key={index}>
                            <h3>{edge.node.frontmatter.title}</h3>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
};

export default BlogPage