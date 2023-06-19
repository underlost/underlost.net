import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import url from 'url'

import config from '../../../utils/siteConfig'
import ArticleMeta from './ArticleMeta'
import WebsiteMeta from './WebsiteMeta'
import AuthorMeta from './AuthorMeta'
import HomepageMeta from './HomepageMeta'

/**
* MetaData will generate all relevant meta data information incl.
* JSON-LD (schema.org), Open Graph (Facebook) and Twitter properties.
*
*/
const MetaData = ({
  data,
  settings,
  title,
  description,
  image,
  location,
  isHome,
}) => {
  const canonical = url.resolve(config.siteUrl, location.pathname)
  const { ghostPost, ghostTag, ghostAuthor, ghostPage } = data
  settings = settings.allGhostSettings.edges[0].node
  if (isHome){
    return (
      <HomepageMeta
        data={{}}
        canonical={canonical}
        title={title}
        description={description}
        image={image}
        type="WebSite"
      />
    )
  } else if (ghostPost) {
    return (
      <ArticleMeta
        data={ghostPost}
        canonical={canonical}
      />
    )
  } else if (ghostTag) {
    return (
      <WebsiteMeta
        data={ghostTag}
        canonical={canonical}
        type="Series"
      />
    )
  } else if (ghostAuthor) {
    return (
      <AuthorMeta
        data={ghostAuthor}
        canonical={canonical}
      />
    )
  } else if (ghostPage) {
    return (
      <WebsiteMeta
        data={ghostPage}
        canonical={canonical}
        type="WebSite"
      />
    )
  } else {
    title = title || config.siteTitleMeta || settings.title
    description = description || config.siteDescriptionMeta || settings.description
    image = image || settings.cover_image || null

    image = image ? url.resolve(config.siteUrl, image) : null

    return (
      <WebsiteMeta
        data={{}}
        canonical={canonical}
        title={title}
        description={description}
        image={image}
        type="WebSite"
      />
    )
  }
}

MetaData.defaultProps = {
  data: {},
  isHome: false,
}

MetaData.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.object,
    ghostTag: PropTypes.object,
    ghostAuthor: PropTypes.object,
    ghostPage: PropTypes.object,
  }).isRequired,
  settings: PropTypes.shape({
    allGhostSettings: PropTypes.object.isRequired,
    cover_image: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  isHome: PropTypes.bool,
}

const MetaDataQuery = props => (
  <StaticQuery
    query={graphql`
            query GhostSettingsMetaData {
                allGhostSettings {
                    edges {
                        node {
                            title
                            description
                        }
                    }
                }
            }
        `}
    render={data => <MetaData settings={data} {...props} />}
  />
)

export default MetaDataQuery
