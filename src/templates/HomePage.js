import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
    <section className="section">
      <div className="container">
        3 blocs blog ici
      </div>
    </section>
    <section class="section">
                  <div class="container">
                    <div class="PostSection">
                      <div class="PostSection--Grid">


                        <a class="PostCard " href="/posts/lart-soigne-aussi/">
                          <div class="PostCard--Image relative">
                            <div class="BackgroundImage" style="background-image:url(https://ucarecdn.com/99ec26b4-a7d1-4cd9-8a86-098c650de5d4/-/progressive/yes/-/format/auto/-/resize/10x/);background-size:cover">
                              <div class="true LazyImage BackgroundImage absolute  faded" style="background-image:url(https://ucarecdn.com/99ec26b4-a7d1-4cd9-8a86-098c650de5d4/-/progressive/yes/-/format/auto/-/resize/10x/);background-size:cover">
                              </div>
                            </div>
                          </div>
                          <div class="PostCard--Content">
                            <h3 class="PostCard--Title">L&#x27;ART SOIGNE AUSSI!</h3>
                            <div class="PostCard--Category">Home</div>
                            <div class="PostCard--Excerpt">Mes Talismans s&#x27;inspirent de la lecture énergétique d’une personne à un moment précis, d’un endroit ou d’un objet ou être vivant, et…</div>
                          </div>

                        </a>
                      </div>
                  </div>
              </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
