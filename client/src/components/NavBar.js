import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
//import MenuIcon from "@mui/icons-material/Menu";
import Auth from "../utils/auth";
const styles = {
  appBar: {
    backgroundColor: "rgb(122, 196, 239)",
    color: "black",
  },
};

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={styles.appBar} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>

          <Button color="inherit">
            <Link to="/">Home</Link>
          </Button>

          {Auth.loggedIn() ? (
            <>
              <Button color="inherit">
                <Link to="/profile">Profile</Link>
              </Button>
              <Button onClick={Auth.logout} color="inherit">
                <Link to="/"> Log-out </Link>
              </Button>
            </>
          ) : (
            <Button color="inherit">
              <Link to="/signin">Login</Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
