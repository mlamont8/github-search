import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

const Appbar = () => (
  <AppBar position="static">
    <Toolbar>
      <i className="fab fa-github fa-2x appBar-icon" />
      <Typography variant="h6" color="inherit" noWrap>
        Github User Search
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Appbar;
