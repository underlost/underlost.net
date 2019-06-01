import React from 'react'
import PageWrap from '../components/page-wrap'

const ProjectPage = () => (
  <PageWrap>
    <div>
      <h1>Page template</h1>
    </div>
  </PageWrap>
)
export default ProjectPage

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      excerpt
      fields {
        slug
      }

      frontmatter {
        guid
        title
        date(formatString: "DD.MM.YYYY")
        description
        color
      }
    }
  }
`
