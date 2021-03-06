import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/styles.scss";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;
  const posts = data.allMarkdownRemark.edges;
  const social = data.site.siteMetadata.social;
  const projects = data.site.siteMetadata.projects;

  return (
    <Layout location={location} title={siteTitle} description={siteDescription} social={social} projects={projects}>
      <Helmet>
          <script type='module' src='/paintdrip.js' />
      </Helmet>
      <SEO title="Somethinghitme.com | Code, demos and ideas." />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} className='article'>
            <header>
              <h3>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>Posted on <Link to={node.fields.slug}>{node.frontmatter.date}</Link></small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.excerpt,
                }}
              />
              <Link className='link-button' to={node.fields.slug}>
                  Continue Reading
              </Link>
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description,
        social {
          url,
          title
        },
        projects {
          url,
          title
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 240, format: HTML)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
