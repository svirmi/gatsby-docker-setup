import React from "react";
import { Link } from "gatsby";

import HeaderStyles from "./header.module.scss";

const Header = () => {
    return (
        <header className={HeaderStyles.header}>
            <h1>
                <Link to="/" className={HeaderStyles.title}>Gatsby site</Link>
            </h1>
            <nav>
                <ul className={HeaderStyles.navList}>
                    <li>
                        <Link to="/" className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem}>Home</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/about" className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header