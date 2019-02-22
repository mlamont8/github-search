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
      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      searchTerm: "",
      pageNumber: 1,
      gridData: null
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  async handleSearch(result) {
    // await this.setState({
    //   searchTerm: result
    // });
    const url = `https://api.github.com/search/users?q=${result}&page=${
      this.state.pageNumber
    }&per_page=12`;

    try {
      const response = await axios.get(url);
      console.log(response.data.items);
      this.setState({
        gridData: response.data.items,
        searchTerm: result
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Appbar />
        <main>
          <Search handleSearch={this.handleSearch} />
          <Pagination />
          <Results gridData={this.state.gridData} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
