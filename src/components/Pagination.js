import React from "react";
import PagePagination from "rc-pagination";
import "rc-pagination/assets/index.css";

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
    />
    <div>
      <p>{props.totalResults} Users</p>
    </div>
  </div>
);

export default Pagination;
