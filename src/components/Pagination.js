import React, { Component } from "react";
import PagePagination from "rc-pagination";
import "rc-pagination/assets/index.css";

const Pagination = props => (
  <div className="paginationContainer">
    <PagePagination
      onChange={props.onPageChange}
      current={props.pageNumber}
      total={props.totalResults}
    />
  </div>
);

export default Pagination;
