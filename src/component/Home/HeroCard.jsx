import React from "react";

import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import "./herocard.css";
import Button from "../Common/Button";

const HeroContent = () => {
  return (
    <div>
      <p>Hello, I am</p>
      <h1>MITHUN ROY</h1>
      <p>CIVIL AND STRUCTURAL ENGINEER</p>
      <Button>Contact</Button>
      <p>Icons</p>
    </div>
  );
};

const HeroImage = ({ imgData, imgSrc, altText = "Bingo!" }) => {
  return (
    <>
      <GatsbyImage image={imgData} alt={altText}></GatsbyImage>
    </>
  );
};

function HeroCard() {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      siteInfo: site {
        siteMetadata {
          description
          title
        }
      }
      file(relativePath: { eq: "heronew.png" }) {
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
    <section className='hero-wrapper'>
      <div className='hero-content'>
        <div>
          <p>Hello, I am</p>
          <h1>MITHUN ROY</h1>
          <p className='subtitle'>CIVIL AND STRUCTURAL ENGINEER</p>
        </div>
        <Button>Contact Me</Button>
        <p>Icons</p>
      </div>
      {/* <GatsbyImage
        className='hero-image'
        image={data.file.childImageSharp.gatsbyImageData}
      ></GatsbyImage> */}
      <div className='hero-image'>
        {/* <HeroImage
          imgData={data.file.childImageSharp.gatsbyImageData}
          altText='hero-image'
          className='imageWrapper'
        ></HeroImage> */}
        <div className='imageWrapper'>
          <GatsbyImage
            className='hero-image'
            image={data.file.childImageSharp.gatsbyImageData}
          ></GatsbyImage>
        </div>
      </div>
    </section>
  );
}

export default HeroCard;
