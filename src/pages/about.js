// Step 1: Import React
import * as React from "react";
import Layout from "../component/Layout";
import About, { AboutInfo } from "../component/About/About";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout>
      <About></About>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

// Step 3: Export your component
export default AboutPage;
