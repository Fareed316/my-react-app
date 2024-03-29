import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card";
import Section from "../components/Section";
import Wave from "../components/Wave";
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'
import Footer from "../components/Footer";

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  padding: 0 20px;

  @media(max-width: 800px){
    grid-template-columns: 1fr;
  }
`

const IndexPage = ({ children, data }) => (
  <Layout >
                <Helmet
              title= {data.site.siteMetadata.title}
              meta= {[
                { name: 'description', content: data.site.siteMetadata.description },
                { name: 'keywords', content: data.site.siteMetadata.keywords },
              ]
              } />
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br/>design and code React apps</h1>
        <p>Complete courses about the best tools ad design systems. Prototype and build apps with React and Swift.</p>

        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>

        <Wave/>
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card 
        title= "Design System"
        text="10 sections"
        image={require('../images/wallpaper.jpg')}/>
        <Card 
        title= "React for designer"
        text="12 sections"
        image={require('../images/wallpaper2.jpg')}/>
        <Card 
        title= "Sound Design"
        text="5 sections"
        image={require('../images/wallpaper3.jpg')}/>
        <Card 
        title= "ARKit 2"
        text="10 sections"
        image={require('../images/wallpaper4.jpg')}/>
      </div>
    </div>
    <Section 
      image= { require('../images/wallpaper2.jpg')}
      logo= { require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />

    <SectionCaption>12 Sections- 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell=> (
        <Cell title={cell.title}
        image ={cell.image}/>
      ))}
    </SectionCellGroup>
      <Footer data={data}>
      Backgrounds made in Cinema 4D, iOS app in Swift, site in React. <a href="mailto:mfu212@nyu.edu">Email us</a>to ask anything. © 2019
      </Footer>
  </Layout>

)

export default IndexPage

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    
    allContentfulLink(sort:{ fields: [createdAt], order: ASC}){
      edges{
        node {
          title
          url
          createdAt
        }
      }
    }
  
  }
`