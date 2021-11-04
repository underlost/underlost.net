import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import LinkButton from './LinkButton'

const PostsList = () => {
  const data = useStaticQuery(query)

  return (
    <ul className={`list-nav list-unstyled mb-0`}>
      {data.allMdx.edges.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const permalink = node.fields.slug
        const alt = node.frontmatter.alt
        const description = node.frontmatter.description
        const date = node.frontmatter.date

        return (
          <li className="pb-4">
            <article>
              <header>
                <h2 className="h5"><a href={permalink}>{title}</a></h2>
              </header>
              <span>
                <p className="d-inline">{description}</p><a href={permalink}><time datetime={date} className="text-pink h6 ps-2">{date}</time></a>
              </span>

            </article>
          </li>
        )
      })}
    </ul>
  )
}

const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___weight], order: DESC }, filter: { fields: { sourceInstanceName: { eq: "posts" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            alt
            website
            icon
            weight
            description
            date
          }
        }
      }
    }
  }
`

export default PostsList
