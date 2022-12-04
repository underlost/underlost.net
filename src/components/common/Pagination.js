import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext

  return (
    <nav className="pagination" role="navigation">
      {numberOfPages > 1 && (
        <div className="text-center">
          <small>
            Page {humanPageNumber} of {numberOfPages}
          </small>
        </div>
      )}
      <div className="grid grid-cols-2">
        <div>
          {previousPagePath && (
            <Link to={previousPagePath} className="btn-underline" rel="prev">
              <span>Previous</span>
            </Link>
          )}
        </div>
        <div className="text-right">
          {nextPagePath && (
            <Link to={nextPagePath} rel="next" className="btn-underline">
              <span>Next</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Pagination
