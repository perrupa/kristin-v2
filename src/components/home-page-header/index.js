import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "./home-page-header.scss"

export const HomePageHeader = props => {
  const { title, tagline, CTA, image = null, content } = props

  return (
    <section>
      <header className="homepage-header">
        <div className="homepage-header__titleContainer">
          <h1 className="homepage-header__title">{title}</h1>
          <h2 className="homepage-header__tagline">{tagline}</h2>
        </div>

        {image && (
          <Img
            fluid={image}
            alt={title + " (featured image)"}
            className="homepage-header__featured-image"
          />
        )}
      </header>

      {CTA && (
        <div className="homepage-header__content">
          <div dangerouslySetInnerHTML={{ __html: content }} />

          <Link to={CTA.link}>{CTA.text}</Link>
        </div>
      )}
    </section>
  )
}
