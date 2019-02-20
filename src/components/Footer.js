import React from "react";
import Typography from "@material-ui/core/Typography";

const Footer = () => (
  <div className="footerContainer">
    <Typography variant="h6" align="center" gutterBottom>
      Github Search
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="textSecondary"
      component="p"
    >
      &copy; 2019 Marimi Lamont Taylor
    </Typography>
  </div>
);

export default Footer;
