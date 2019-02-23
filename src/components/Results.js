import React from "react";
import Grid from "@material-ui/core/Grid";
import Cards from "./Cards";
import EmptyPage from "./EmptyPage";

const Results = props => {
  return (
    <div>
      {props.gridData ? (
        <Grid container spacing={40}>
          {props.gridData.map((data, index) => (
            <Grid item key={index} sm={6} md={4} lg={3}>
              <Cards
                login={data.login}
                avatar={data.avatar_url}
                score={data.score}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <EmptyPage apiError={props.apiError} />
      )}
    </div>
  );
};

export default Results;
