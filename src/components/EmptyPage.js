import React from "react";

// Empty page to offer when no results

const EmptyPage = props => {
  const message = props.apiError ? "API ERROR - Try again later" : null;
  return (
    <div className="emptyPageContainer">
      <p>{message}</p>
      <div className="emptyPageImage">
        <i className="fab fa-github-alt fa-10x emptyPage-icon" />
      </div>
    </div>
  );
};

export default EmptyPage;
