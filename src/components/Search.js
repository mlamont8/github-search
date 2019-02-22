import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { validateAll } from "indicative";

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
      required: "Empty searches not allowed",
      min: "Must start with at least 2 characters",
      max: "Must be less than 10 characters"
    };
    const rules = {
      value: "required|string|min:2|max:10"
    };
    validateAll(data, rules, messages)
      .then(() => {
        // When data has been validated
        console.log("success", data);
      })
      // catches errors and places them in state for errors
      .catch(errors => {
        const formattedErrors = {};
        errors.forEach(error => (formattedErrors[error.field] = error.message));
        console.log(formattedErrors);
        this.setState({ errors: formattedErrors });
      });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  }

  render() {
    console.log(this.state.errors.value);
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
