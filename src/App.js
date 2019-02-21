import React, { Component } from "react";
import Appbar from "./components/Appbar";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Results from "./components/Results";
import Footer from "./components/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Query } from "react-apollo";
import gql from "graphql-tag";
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
        <Query
          query={gql`
            {
              search(type: USER, query: "lisa", first: 12) {
                userCount
                edges {
                  node {
                    ... on User {
                      name
                      login
                      avatarUrl
                      followers {
                        totalCount
                      }
                      starredRepositories {
                        totalCount
                      }
                      url
                      bio
                    }
                  }
                }
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return console.log(data);
          }}
        </Query>
        <CssBaseline />
        <Appbar />
        <main>
          <Search />
          <Pagination />
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
