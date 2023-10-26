import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
// import HeroCardYo from "./_tests_/HeroCardYo";
import HeroCard from "./HeroCard";
import Wrapper from "../Common/Wrapper";
import MarginBottom from "../Common/MarginBottom";
// import Hero from "./_tests_/Hero";
// import HeroSection from "./_tests_/HeroSection";
// import { GatsbyImage } from "gatsby-plugin-image";
// import "./home.module.css";

const Home = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
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
  const { title, description } = data.siteInfo.siteMetadata;
  return (
    <section>
      {/* <h1>Home page</h1> */}
      {/* <h2>{description}</h2> */}
      {/* <HeroCard></HeroCard>
       */}
      <Wrapper>
        <HeroCard></HeroCard>
      </Wrapper>
      {/* <HeroCardYo></HeroCardYo> */}
      {/* <HeroSection></HeroSection> */}
      <Wrapper>
        <div>Snap shot about skills</div>
        <div>Research HighLights</div>
        <div>Blog Highlights</div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          porro consequatur in nostrum fuga, vero, architecto atque dicta
          aliquam ab a labore itaque repellendus. Velit eaque vitae placeat
          nostrum delectus.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          porro consequatur in nostrum fuga, vero, architecto atque dicta
          aliquam ab a labore itaque repellendus. Velit eaque vitae placeat
          nostrum delectus.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          porro consequatur in nostrum fuga, vero, architecto atque dicta
          aliquam ab a labore itaque repellendus. Velit eaque vitae placeat
          nostrum delectus.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          porro consequatur in nostrum fuga, vero, architecto atque dicta
          aliquam ab a labore itaque repellendus. Velit eaque vitae placeat
          nostrum delectus.
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          porro consequatur in nostrum fuga, vero, architecto atque dicta
          aliquam ab a labore itaque repellendus. Velit eaque vitae placeat
          nostrum delectus.
        </div>
      </Wrapper>
      <MarginBottom amount='2rem'></MarginBottom>
    </section>
  );
};

// You'll learn about this in the next task, just copy it for now
// Assiging the title of the default home page, by running a graphql query this title is read from gastby config file. Change the title from gatsby config file.
export const Head = ({ data }) => (
  <title>{data.siteInfo.siteMetadata.title + " | Home"}</title>
);

export default Home;

/* This way of excuting graphql works in direct pages inside pages folder. But in component level, like this we use a function useStaticQuery */
// export const query = graphql`
//   query MyQuery {
//     siteInfo: site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//     file(relativePath: { eq: "banner.png" }) {
//       childImageSharp {
//         gatsbyImageData(
//           layout: CONSTRAINED
//           placeholder: BLURRED
//           formats: [AUTO, WEBP]
//         )
//       }
//     }
//   }
// `;
