import React from "react";
import { AboutInfo } from "./About.style";
import Avatar from "./Avatar";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Wrapper from "../Common/Wrapper";
import MarginBottom from "../Common/MarginBottom";

// Step 2: Define your component
const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      siteInfo: site {
        siteMetadata {
          description
          title
        }
      }
      file(relativePath: { eq: "avatar.jpg" }) {
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
  const contentStyle = {
    margin: "auto",
    textAlign: "center",
  };

  return (
    <>
      <div style={contentStyle}>
        <h1>About Me</h1>
        <p>Unveiling the Person Within</p>
      </div>
      <Wrapper>
        <section>
          <AboutInfo>
            <div>
              <Avatar imageSrc={data.file.childImageSharp.gatsbyImageData} />
            </div>
            <div>
              <p>
                Hi, I am Mithun Roy, a Civil and Structral Engineer from
                Bangladesh, presently working at{" "}
                <a className='about__link' href='https://rsc-bd.org/en'>
                  RMG Sustainability Council (RSC)
                </a>{" "}
                as a Structural Engineer. I possess four years of professional
                experience, with prior employment at two other companies.
                <br /> <br />I completed my Bachelor of Science in Civil
                Engineering from Bangladesh Engineering and Technology
                University. During my bachelor days I got exposed to
                Environmental Fluid Mechanics.
              </p>
            </div>
          </AboutInfo>
          <MarginBottom amount={"2rem"}></MarginBottom>
          <div style={contentStyle}>
            <h2>Education</h2>
          </div>
          <MarginBottom amount={"2rem"}></MarginBottom>
          <div>
            <h4>M.Sc in Civil Engineering</h4>
            <h5>Bangladesh Engineering and Technology University</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              cupiditate quam error amet quisquam expedita facilis deleniti
              ratione commodi ipsa?Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Optio, sequi.
            </p>
          </div>
          <MarginBottom amount={"1rem"}></MarginBottom>
          <div>
            <h4>B.Sc in Civil Engineering</h4>
            <h5>Bangladesh Engineering and Technology University</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              cupiditate quam error amet quisquam expedita facilis deleniti
              ratione commodi ipsa?Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Optio, sequi.
            </p>
          </div>
          <MarginBottom amount={"2rem"}></MarginBottom>
          <div style={contentStyle}>
            <h2>Professional Experience</h2>
          </div>
          <MarginBottom amount={"2rem"}></MarginBottom>
          <div>
            <h4>Structural Safety Engineer</h4>
            <h5>RMG Sustainability Council (RSC)</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              cupiditate quam error amet quisquam expedita facilis deleniti
              ratione commodi ipsa?Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Optio, sequi.
            </p>
          </div>
          <MarginBottom amount={"1rem"}></MarginBottom>
          <div>
            <h4>Structural Design Engineer</h4>
            <h5>Dzignscape Professionals Ltd.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              cupiditate quam error amet quisquam expedita facilis deleniti
              ratione commodi ipsa?Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Optio, sequi.
            </p>
          </div>
          <MarginBottom amount={"2rem"}></MarginBottom>
          <div style={contentStyle}>
            <h2>Honors & Awards</h2>
          </div>
          <MarginBottom amount={"2rem"}></MarginBottom>
          <div>
            <h4>Education Board Scholarship in HSC</h4>
            <h5>Board of Intermediate and Secondary Education</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              cupiditate quam error amet quisquam expedita facilis deleniti
              ratione commodi ipsa?Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Optio, sequi.
            </p>
          </div>
          <MarginBottom amount={"1rem"}></MarginBottom>
          <div>
            <h4>Education Board Scholarship in SSC</h4>
            <h5>Board of Intermediate and Secondary Education.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              cupiditate quam error amet quisquam expedita facilis deleniti
              ratione commodi ipsa?Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Optio, sequi.
            </p>
          </div>
          <MarginBottom amount={"2rem"}></MarginBottom>
        </section>
      </Wrapper>
    </>
  );
};

export default About;
