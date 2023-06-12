import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

const BoringApp = ({ data }) => {
  const posts = data.allGhostPost.edges

  return (
    <div className="container mx-auto pt-8 lg:pb-8">
      <div className="grid grid-cols-12 gap-8 lg:gap-24">
        <div className="col-span-12 lg:col-span-5">
          <div className="bg-light dark:bg-purple-dark h-10 w-full relative z-10" />
          <div className="aspect-square bg-green flex justify-end -translate-y-10">
            <div className="mt-auto lg:text-right p-8 text-black">
              <h2 className="font-black text-4xl">Boredable.</h2>
              <p className="text-lg max-w-sm">News and updates on building a new, but boring social network.</p>
            </div>
          </div>
          <div className="-translate-y-10">
            <div className="grid grid-cols-6 gap-0">
              <div className="col-span-2 h-5" />
              <div className="col-span-1 h-5 bg-green" />
              <div className="col-span-1 h-5" />
              <div className="col-span-2 h-5 bg-green" />
            </div>
            <div className="grid grid-cols-6 gap-0">
              <div className="col-span-2 h-5 bg-green" />
              <div className="col-span-1 h-5" />
              <div className="col-span-1 h-5 bg-green" />
              <div className="col-span-2 h-5" />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="lg:pt-20 px-8 lg:mx-0">
            <h3 className="subtitle lg:mb-8">Latest Project Updates</h3>

            <div className="lg:max-w-3xl">
              <ul>
                {posts.map(({ node }) => {
                  const url = `/writing/${node.slug}/`
                  return (
                    <li key={node.id} className="py-5">
                      <Link to={url} className="hover:underline">
                        <h3 className="text-3xl text-wide font-black inline pr-3">{node.title}</h3>
                        <span className="uppercase reading-time text-lg inline text-slate dark:text-pink">4min read</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

BoringApp.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
}

const BoringAppBlock = props => (
  <StaticQuery
    query={graphql`
      query GhostBoredableQuery {
        allGhostPost(sort: { published_at: DESC }, filter: { tags: { elemMatch: { name: { eq: "#boredable" } } } }, limit: 4) {
          edges {
            node {
              ...GhostPostFields
            }
          }
        }
      }
    `}
    render={data => <BoringApp data={data} {...props} />}
  />
)

export default BoringAppBlock