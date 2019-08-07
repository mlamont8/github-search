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
      name: "",
      company: "",
      bio: "",
      followers: "",
      repo: ""
    };
    this.moreInfo = this.moreInfo.bind(this);
  }

  // To reset state when there is a page change or
  // new search
  componentDidUpdate(prevProps) {
    if (this.props.login !== prevProps.login) {
      this.setState({
        name: "",
        company: "",
        bio: "",
        followers: "",
        repo: ""
      });
    }
  }

  async moreInfo() {
    const url = `${this.props.url}`;
    try {
      const response = await axios.get(url);
      this.setState({
        name: response.data.name,
        company: response.data.company,
        bio: response.data.bio,
        followers: response.data.followers,
        repo: response.data.public_repos
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Card className="cardContainer">
        <CardContent>
          <div className="topCardContainer">
            <div className="cardImage">
              <img src={this.props.avatar} alt={this.props.login} />
            </div>
            <div className="cardTopRight">
              <Typography>Score:</Typography>
              <Typography>{this.props.score}</Typography>
            </div>
          </div>
          <Typography
            className="loginName"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {this.props.login}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={this.moreInfo}>
            More info
          </Button>

          <a
            className="cardLink"
            href={this.props.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="small" color="primary">
              Github Page
            </Button>
          </a>
        </CardActions>
        <CardContent className="moreCardContent">
          <Typography variant="h6">{this.state.name}</Typography>
          <Typography>{this.state.company}</Typography>
          <Typography className="cardBio">{this.state.bio}</Typography>
          <Typography className="bottomCard">
            <span className={!this.state.followers ? " hide" : " show"}>
              Followers: {this.state.followers}
            </span>
            {"  "}
            <span className={!this.state.repo ? " hide" : " show"}>
              Repos: {this.state.repo}
            </span>
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
