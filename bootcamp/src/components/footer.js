import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import FooterStyles from "./footer.module.scss";


const Footer = () => {

const data = useStaticQuery(graphql`    
        query {
            site {
                siteMetadata {                    
                         email
                     }
                }
            }    
    `);

    return (
        <footer className={FooterStyles.footer}>
            <p>Footer section. © — знак охраны авторского права, представляет собой латинскую литеру C, помещённую в центре окружности.</p>
            <p>{data.site.siteMetadata.email}</p>
        </footer>
    )
}

export default Footer