import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import axios from "axios";
import PropTypes from "prop-types";

// Child of Results.js

function Cards(props) {
  const [data, setData] = useState({});
  const [getMore, setGetMore] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(props.url);
      setData(result.data);
      setGetMore(false);
    }

    // To avoid fetching after initial render
    // fetch only when user has clicked button
    // which toggles getMore to true
    if (getMore) {
      fetchData();
    }
  }, [getMore]);

  const { login, avatar, html_url, score } = props;

  return (
    <Card className="cardContainer">
      <CardContent>
        <div className="topCardContainer">
          <div className="cardImage">
            <img src={avatar} alt={login} />
          </div>
          <div className="cardTopRight">
            <Typography>Score:</Typography>
            <Typography>{score}</Typography>
          </div>
        </div>
        <Typography
          className="loginName"
          gutterBottom
          variant="h5"
          component="h2"
        >
          {login}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => setGetMore(true)}>
          More info
        </Button>

        <a
          className="cardLink"
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="small" color="primary">
            Github Page
          </Button>
        </a>
      </CardActions>

      <CardContent className="moreCardContent">
        <Typography variant="h6">{data.name}</Typography>
        <Typography>{data.company}</Typography>
        <Typography className="cardBio">{data.bio}</Typography>
        <div className="bottomCard">
          <div className={!data.followers ? " hide" : " show"}>
            Followers: {data.followers}
          </div>

          <div className={!data.public_repos ? " hide" : " show"}>
            Repos: {data.public_repos}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Cards;

Cards.propTypes = {
  login: PropTypes.string,
  avatar: PropTypes.string,
  score: PropTypes.number,
  id: PropTypes.number,
  html_url: PropTypes.string,
  url: PropTypes.string
};
