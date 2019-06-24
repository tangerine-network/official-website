import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Test = styled.div`
  border: 1px solid red;
  height: 20px;
`;

const IndexPage = ({ pathContext: { locale } }) => {
  // console.log('locale', locale);
  return (
    <Layout locale={locale}>
      <SEO title="Home" />
      <Test />
      <h1>Hi people testest 2222</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export default IndexPage
