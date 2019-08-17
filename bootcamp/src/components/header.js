import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import HeaderStyles from "./header.module.scss";

const Header = () => {

    const data = useStaticQuery(graphql`    
        query {
            site {
                siteMetadata {
                         title
                     }
                }
            }    
    `);

    const activeStyles = {
        background: 'yellow',
        color:  'green'
    };

    return (
        <header className={HeaderStyles.header}>
            <h1>
                <Link to="/" className={HeaderStyles.title}>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={HeaderStyles.navList}>
                    <li>
                        <Link to="/"
                              className={HeaderStyles.navItem}
                              activeStyle={activeStyles}>Home</Link>
                    </li>
                    <li>
                        <Link to="/blog"
                              className={HeaderStyles.navItem}
                              activeStyle={activeStyles}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact"
                              className={HeaderStyles.navItem}
                              activeStyle={activeStyles}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/about"
                              className={HeaderStyles.navItem}
                              activeStyle={activeStyles}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header