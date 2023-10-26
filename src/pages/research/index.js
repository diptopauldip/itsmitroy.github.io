import React from "react";
import Layout from "../../component/Layout";
import Research from "../../component/Research/Research";

const ResearchPage = () => {
  return (
    <Layout>
      <Research></Research>
    </Layout>
  );
};

export const Head = () => <title>Research</title>;

export default ResearchPage;
