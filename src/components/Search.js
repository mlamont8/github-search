import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Search submitted as", this.state.value);
    this.props.handleSearch(this.state.value);
  }

  render() {
    return (
      <div className="searchContainer">
        <div className="headerContent">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Github Search
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            Perform a simple Github Search. Select any user to be sent to that
            page.
          </Typography>
        </div>
        <div className="formContainer">
          <Grid container justify="center">
            <Grid item>
              <form className="search-form" onSubmit={this.handleSubmit}>
                <TextField
                  id="search-field"
                  label="Search Users"
                  className="search-field"
                  value={this.state.value}
                  onChange={this.handleChange}
                  margin="normal"
                />
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Search;
