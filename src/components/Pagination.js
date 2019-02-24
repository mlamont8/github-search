import React from "react";
import PagePagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
import "rc-pagination/assets/index.css";

import PropTypes from "prop-types";

// Pagination container
// Only show when there are results

const Pagination = props => (
  <div
    className={
      "paginationContainer" + (props.totalResults === 0 ? " hide" : " show")
    }
  >
    <PagePagination
      onChange={props.onPageChange}
      current={props.pageNumber}
      total={props.totalResults}
      showLessItems
      locale={localeInfo}
    />

    <div>
      <p>{props.totalResults} Users</p>
    </div>
  </div>
);

export default Pagination;

Pagination.propTypes = {
  resultsPerPage: PropTypes.number,
  totalResults: PropTypes.number,
  pageNumber: PropTypes.number,
  onPageChange: PropTypes.func.isRequired
};
