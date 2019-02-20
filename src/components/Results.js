import React from "react";
import Grid from "@material-ui/core/Grid";
import Cards from "./Cards";

const Results = props => (
  <div>
    <Grid container spacing={40}>
      {props.cards.map(card => (
        <Grid item key={card} sm={6} md={4} lg={3}>
          <Cards />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default Results;
