import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query WebSiteInfoF {
      site {
        siteMetadata {
          description
          title
          copywrite
        }
      }
    }
  `);
  const { copywrite } = data.site.siteMetadata;
  console.log(copywrite);
  return (
    // <BrowserRouter>
    <footer>
      <p>{copywrite}</p>
    </footer>
    // </BrowserRouter>
  );
};

export default Footer;
