import React from "react";
import Typography from "@material-ui/core/Typography";

const Footer = () => (
  <div className="footerContainer">
    <Typography variant="h6" align="center" gutterBottom>
      Footer
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="textSecondary"
      component="p"
    >
      Footer will be Here!
    </Typography>
  </div>
);

export default Footer;
