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
    this.moreInfo = this.moreInfo.bind(this);
  }

  async moreInfo() {
    const url = `${this.props.url}`;
    console.log("more", url);
    try {
      const response = await axios.get(url);
      console.log(response.data);
      // this.setState({
      //   gridData: response.data.items,
      //   searchTerm: result,
      //   totalResults: response.data.total_count
      // });
    } catch (error) {
      console.error(error);
      this.setState({
        apiError: true
      });
    }
  }

  render() {
    return (
      <Card>
        <CardContent>
          <div className="topCardContainer">
            <div className="cardImage">
              <img src={this.props.avatar} alt={this.props.login} />
            </div>
            <div className="cardTopRight">
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
