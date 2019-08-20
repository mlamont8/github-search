import React, { useState } from "react";
import Appbar from "./components/Appbar";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Results from "./components/Results";
import Footer from "./components/Footer";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [apiData, setApiData] = useState({});
  const [totalResults, setTotalResults] = useState(0);
  const [resultsPerPage] = useState(12);
  const [apiError, setApiError] = useState(false);
  const [reset, setReset] = useState(false);

  function onPageChange(page) {
    const url = `https://api.github.com/search/users?q=${searchTerm}&page=${page}&per_page=12`;

    setPageNumber(page);
    setReset(true);
    apiCall(url);
  }

  function newSearch(term) {
    setSearchTerm(term);
    const url = `https://api.github.com/search/users?q=${term}&page=1&per_page=12`;

    setApiError(false);
    setReset(true);
    setPageNumber(1);
    apiCall(url);
  }

  async function apiCall(url) {
    try {
      const res = await axios(url);
      setApiData(res.data);
      setTotalResults(res.data.total_count);
      setReset(false);
    } catch (error) {
      setApiError(true);
    }
  }

  function handleReset() {
    setApiData({});
    setTotalResults(0);
    setReset(true);
  }

  return (
    <div className="App">
      <CssBaseline />
      <Appbar />
      <main>
        <Search newSearch={newSearch} reset={handleReset} />
        <Pagination
          resultsPerPage={resultsPerPage}
          totalResults={totalResults}
          pageNumber={pageNumber}
          onPageChange={onPageChange}
        />

        <Results gridData={apiData.items} apiError={apiError} reset={reset} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
