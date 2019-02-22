import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { validateAll, rule } from "indicative";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateTerm = this.validateTerm.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  // Validate search terms that are entered
  // If correct, update state on App.js via handleSearch method
  validateTerm(e) {
    e.preventDefault();
    this.setState({ errors: {} });
    const data = this.state;
    const messages = {
      required: "Empty searches are not allowed",
      min: "Must be a minimum of 2 characters",
      max: "Must be a maximum of 10 characters",
      regex: "Search parameters invalid!  Try Again"
    };
    const rules = {
      value: [
        rule("required"),
        rule("min", 2),
        rule("max", 10),
        rule("regex", /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)
      ]
    };
    validateAll(data, rules, messages)
      .then(() => {
        // After successfull validation, perform search
        this.props.handleSearch(data.value);
      })
      // catches errors and places them in state for errors
      .catch(errors => {
        const formattedErrors = {};
        errors.forEach(error => (formattedErrors[error.field] = error.message));
        this.setState({ errors: formattedErrors });
      });
  }

  render() {
    const errorMessage = this.state.errors.value;
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
            Github User Search
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
              <form className="search-form" onSubmit={this.validateTerm}>
                <TextField
                  error={errorMessage ? true : false}
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
          <div className="errorContainer">
            <p>{errorMessage}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
