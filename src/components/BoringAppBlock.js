import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

const BoringApp = ({ data }) => {
  const posts = data.allGhostPost.edges

  return (
    <div className="container mx-auto pt-8 lg:pb-8">
      <div className="grid grid-cols-12 gap-8 lg:gap-24">
        <div className="col-span-12 lg:col-span-5">
          <div className="aspect-square flex flex-col">
            <div className="grow-0">
              <div className="grid grid-cols-6 gap-0">
                <div className="col-span-2 h-5 bg-green" />
                <div className="col-span-1 h-5 bg-green" />
                <div className="col-span-1 h-5" />
                <div className="col-span-2 h-5 " />
              </div>
              <div className="grid grid-cols-6 gap-0">
                <div className="col-span-2 h-5 bg-green" />
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

            <div className="bg-green flex justify-end grow">
              <div className="mt-auto lg:text-right p-8 text-black">
                <h2 className="font-black text-4xl">Building Boredable.</h2>
                <p className="text-lg max-w-sm ml-auto">A field guild to building a social media platform from the ground up.</p>
              </div>
            </div>

            <div className="grow-0">
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
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="lg:pt-20 px-8 lg:mx-0">
            <h3 className="subtitle lg:mb-8">Latest Project Updates</h3>

            <div className="lg:max-w-3xl">
              <ul className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
                <li className="py-3">
                  <Link to="/boredable/" className="hover:underline">
                    <h3 className="text-xl text-wide font-black">The Idea</h3>
                    <p className="text-base">Another new take on the traditional social media platform.</p>
                  </Link>
                </li>
                {posts.map(({ node }) => {
                  const url = `/writing/${node.slug}/`
                  const isPublished = node.tags.some(tag => tag.name === `#blog`)

                  return (
                    <li key={node.id} className="py-3">
                      {isPublished ? (
                        <Link to={url} className="hover:underline">
                          <h3 className="text-lg text-wide font-black inline pr-3">{node.title}</h3>
                          {node.excerpt && <p className="text-base inline">{node.excerpt}</p>}
                        </Link>
                      ) : (
                        <span className="opacity-30">
                          <h3 className="text-lg text-wide font-black inline pr-3">{node.title}</h3>
                          {node.excerpt && <p className="text-base inline">{node.excerpt}</p>}
                        </span>
                      )}
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
