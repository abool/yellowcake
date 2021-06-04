import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
import Popup from '../components/Popup'

// Export Template for use in CMS preview
export const ArtPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  gallery1,
  section2,
  gallery2,
  section3,
  gallery3,
  video,
  videoPoster,
  videoTitle,
  body
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <Content source={section1} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2>Découvrir les Talismans</h2>
        <Gallery images={gallery1} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={section2} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2>Découvrir les Cercles</h2>
        <Gallery images={gallery2} />
      </div>
    </section>

    <section className="BackgroundVideo-section section">
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>

    <section className="section">
      <div className="container">
        <Content source={section3} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2>Découvrir les Lumières</h2>
        <Gallery images={gallery3} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Popup>
          <Content source={section1} />
        </Popup>
      </div>
    </section>
  </main>
)

const ArtPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ArtPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ArtPage

export const pageQuery = graphql`
  query ArtPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
        section2
        section3
        video
        videoPoster
        videoTitle
      }
    }
  }
`
