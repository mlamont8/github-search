import React, { Component } from "react";
import Appbar from "./components/Appbar";
import Search from "./components/Search";
import Results from "./components/Results";
import Footer from "./components/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Appbar />
        <main>
          <Search />
          <Results cards={this.state.cards} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
