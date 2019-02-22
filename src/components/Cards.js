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
      <div className="topCardContainer">
        <div className="cardImage">
          <img src={props.avatar} alt={props.login} />
        </div>
        <div className="cardTopRight">
          <Typography>{props.score}</Typography>
        </div>
      </div>
      <Typography
        className="loginName"
        gutterBottom
        variant="h5"
        component="h2"
      >
        {props.login}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        More info
      </Button>
      <Button size="small" color="primary">
        Github Page
      </Button>
    </CardActions>
  </Card>
);

export default Cards;
