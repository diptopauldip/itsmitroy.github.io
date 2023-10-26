// HeroSection.js
import React from "react";
// import Button from "./Button"; // Assuming you have a Button component
// import SocialIcons from "./SocialIcons"; // Assuming you have a SocialIcons component
import "./HeroSection.css"; // Import your CSS file for styling
import Button from "../../Common/Button";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query HeroSectionQuery {
      siteInfo: site {
        siteMetadata {
          description
          title
        }
      }
      file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);
  return (
    <div className='hero-container'>
      <div className='content'>
        <h3>Hi, I am</h3>
        <h1>MITHUN ROY</h1>
        <h2>Civil and Structural Engineer.</h2>
        <div className='button-container'>
          {/* <Button link='#' text='Get Started' /> */}
          <Button>Contact</Button>
          {/* <SocialIcons /> */}
        </div>
      </div>
      <div className='image-container'>
        {/* <img src='create-bro.png' alt='Hero' /> */}
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
        ></GatsbyImage>
      </div>
    </div>
  );
};

export default HeroSection;
