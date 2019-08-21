import React from "react";
import useForm from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

function Search(props) {
  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = (data, e) => {
    props.newSearch(data.searchField);
    e.target.reset();
  };

  const onReset = () => {
    reset();
    props.reset();
  };

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
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Perform a simple Github Search.
        </Typography>
        <Typography variant="subheading" align="center" color="textSecondary">
          Enter a name or a portion of a name to begin.
        </Typography>
      </div>
      <div className="formContainer">
        <Grid container justify="center">
          <Grid item>
            <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                id="search-field"
                label="Search"
                className="search-field"
                name="searchField"
                helperText="Github Username"
                inputRef={register({
                  required: "Empty searches are not allowed",
                  minLength: {
                    value: 2,
                    message: "Must be a minimum of 2 characters"
                  },
                  pattern: {
                    value: /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i,
                    message: "Search parameters invalid!  Try again"
                  }
                })}
                margin="normal"
              />
              <div>
                <Button
                  type="submit"
                  value="Submit"
                  color="primary"
                  variant="contained"
                >
                  Search
                </Button>
                <Button onClick={onReset} color="primary" variant="contained">
                  Reset
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
        {errors.searchField ? (
          <div className="errorContainer">{errors.searchField.message}</div>
        ) : null}
      </div>
    </div>
  );
}

export default Search;

Search.propTypes = {
  newSearch: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};
