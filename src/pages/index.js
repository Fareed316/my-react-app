import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br/>design and code ReactJs apps</h1>
        <p>Complete courses about the best tools ad design systems. Prototype and build apps with React and Swift.</p>

        <Link to="/page-2/">Watch the video</Link>
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
