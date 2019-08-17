import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import axios from "axios";
import PropTypes from "prop-types";

// Child of Results.js

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.moreInfo = this.moreInfo.bind(this);
  }

  // To reset state when there is a page change or
  // new search
  componentDidUpdate(prevProps) {
    if (this.props.login !== prevProps.login) {
      this.setState({
        data: {}
      });
    }
  }

  async moreInfo() {
    const url = `${this.props.url}`;
    try {
      const response = await axios.get(url);
      console.log(response.data);
      this.setState({
        data: response.data
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { name, company, followers, repo, bio } = this.state.data;
    const { login, avatar, html_url, score } = this.props;

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
          <Button size="small" color="primary" onClick={this.moreInfo}>
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
          <Typography variant="h6">{name}</Typography>
          <Typography>{company}</Typography>
          <Typography className="cardBio">{bio}</Typography>
          <Typography className="bottomCard">
            <span className={!followers ? " hide" : " show"}>
              Followers: {followers}
            </span>
            {"  "}
            <span className={!repo ? " hide" : " show"}>Repos: {repo}</span>
          </Typography>
        </CardContent>
      </Card>
    );
  }
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
