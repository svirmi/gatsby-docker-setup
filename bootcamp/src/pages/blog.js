import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout"

import BlogStyles from "./blog.module.scss";

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

            <ol className={BlogStyles.posts}>

                {data.allMarkdownRemark.edges.map((edge, index) => {
                    return (

                        <li key={index} className={BlogStyles.post}>

                            <Link to={`/blog/${edge.node.fields.slug}`}>

                            <h3>{edge.node.frontmatter.title}</h3>
                            <p>{edge.node.frontmatter.date}</p>

                            </Link>

                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
};

export default BlogPage