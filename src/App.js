import React, { Component } from "react";
import Appbar from "./components/Appbar";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Results from "./components/Results";
import Footer from "./components/Footer";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      pageNumber: 1,
      gridData: null,
      totalResults: 0,
      resultsPerPage: 12,
      apiError: false
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.newSearch = this.newSearch.bind(this);
  }

  // On Pagination page change, make sure pageNumber in state is updated before
  // proceeding with search
  async onPageChange(page) {
    await this.setState({
      pageNumber: page
    });
    this.handleSearch(this.state.searchTerm);
  }

  // Make sure the page number is reset
  // for each new search
  async newSearch(searchTerm) {
    await this.setState({
      pageNumber: 1,
      apiError: false
    });
    this.handleSearch(searchTerm);
  }

  async handleSearch(result) {
    const url = `https://api.github.com/search/users?q=${result}&page=${
      this.state.pageNumber
    }&per_page=${this.state.resultsPerPage}`;
    console.log(url);

    try {
      const response = await axios.get(url);
      console.log(response.data);
      this.setState({
        gridData: response.data.items,
        searchTerm: result,
        totalResults: response.data.total_count
      });
    } catch (error) {
      console.error(error);
      this.setState({
        apiError: true
      });
    }
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Appbar />
        <main>
          <Search newSearch={this.newSearch} />
          <Pagination
            resultsPerPage={this.state.resultsPerPage}
            totalResults={this.state.totalResults}
            pageNumber={this.state.pageNumber}
            onPageChange={this.onPageChange}
          />

          <Results
            gridData={this.state.gridData}
            apiError={this.state.apiError}
          />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
