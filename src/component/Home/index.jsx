import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const Home = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      siteInfo: site {
        siteMetadata {
          description
          title
        }
      }
      file(relativePath: { eq: "banner.png" }) {
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
    <>
      <h1>Home page</h1>
      <h2>{description}</h2>
      <div>Hero Section</div>
      <div>Snap shot about skills</div>
      <div>Research HighLights</div>
      <div>Blog Highlights</div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
        porro consequatur in nostrum fuga, vero, architecto atque dicta aliquam
        ab a labore itaque repellendus. Velit eaque vitae placeat nostrum
        delectus.
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
        porro consequatur in nostrum fuga, vero, architecto atque dicta aliquam
        ab a labore itaque repellendus. Velit eaque vitae placeat nostrum
        delectus.
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
        porro consequatur in nostrum fuga, vero, architecto atque dicta aliquam
        ab a labore itaque repellendus. Velit eaque vitae placeat nostrum
        delectus.
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
        porro consequatur in nostrum fuga, vero, architecto atque dicta aliquam
        ab a labore itaque repellendus. Velit eaque vitae placeat nostrum
        delectus.
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
        porro consequatur in nostrum fuga, vero, architecto atque dicta aliquam
        ab a labore itaque repellendus. Velit eaque vitae placeat nostrum
        delectus.
      </div>
    </>
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
