import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { HomePageHeader } from "../components/home-page-header/index"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(quality: 80, srcSetBreakpoints: [960, 1440, 2560]) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid
    : ""
  const CTA = {
    text: frontmatter.cta.ctaText,
    link: frontmatter.cta.ctaLink,
  }
  return (
    <Layout header={false}>
      <HomePageHeader
        title={frontmatter.title}
        tagline={frontmatter.tagline}
        content={html}
        image={image}
        CTA={CTA}
      />
      <SEO />

      <BlogListHome />
    </Layout>
  )
}

export default HomePage
