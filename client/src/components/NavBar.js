import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
//import MenuIcon from "@mui/icons-material/Menu";

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

          <Button href="/" color="inherit">
            Home
          </Button>
          <Button href="/signin" color="inherit">
            Login
          </Button>
          <Button href="/profile" color="inherit">
            Profile
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
