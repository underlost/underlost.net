import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext

  return (
    <nav className="pagination" role="navigation">
      <div>
        {previousPagePath && (
          <Link to={previousPagePath} className="btn btn-link text-uppercase" rel="prev">
            Previous
          </Link>
        )}
      </div>
      {numberOfPages > 1 && <div className="pagination-location"><small>Page {humanPageNumber} of {numberOfPages}</small></div>}
      <div>
        {nextPagePath && (
          <Link to={nextPagePath} rel="next" className="btn btn-link text-uppercase">
            Next
          </Link>
        )}
      </div>
    </nav>
  )
}

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Pagination
