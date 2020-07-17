import React, {useEffect} from "react"
import Prism from "prismjs"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {

  useEffect(() => {
    Prism.highlightAll();
  });

  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const description = data.site.siteMetadata.description;
  const social = data.site.siteMetadata.social;
  const projects = data.site.siteMetadata.projects;

  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle} description={description} social={social} projects={projects}>
      <Helmet>
        <script type='module' src='/paintdrip.js' />
      </Helmet>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className='blog-post'>
        <header>
          <h3>
            {post.frontmatter.title}
          </h3>
          <p>
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>
        <footer>
          <Bio />
        </footer>
      </article>

      <nav className='nav'>
        <ul>
          <li>
            {previous && (
              <Link className='link-button' to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link className='link-button' to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 560)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
