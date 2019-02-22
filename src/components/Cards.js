import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// Child of Results.js

const Cards = props => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        Login Name
      </Typography>
      <Typography>Real name</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        View
      </Button>
      <Button size="small" color="primary">
        Edit
      </Button>
    </CardActions>
  </Card>
);

export default Cards;
