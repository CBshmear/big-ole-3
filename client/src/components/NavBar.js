import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { TbTent } from "react-icons/tb";
import "./styles/Styles.css";

//import MenuIcon from "@mui/icons-material/Menu";
import Auth from "../utils/auth";
const styles = {
  appBar: {
    backgroundColor: "rgb(108,147,92)",
    color: "black",
  },
  text: {
    color: "black !important",
  },
};

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={styles.appBar} position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          {/* </IconButton> */}

          <h1>
            <TbTent />
          </h1>

          <Button color="inherit">
            <Link className="Nav" to="/">
              Home
            </Link>
          </Button>

          {Auth.loggedIn() ? (
            <>
              <Button color="inherit">
                <Link className="Nav" to="/profile">
                  Profile
                </Link>
              </Button>
              <Button onClick={Auth.logout} color="inherit">
                <Link className="Nav" to="/">
                  {" "}
                  Log-out{" "}
                </Link>
              </Button>
            </>
          ) : (
            <Button color="inherit">
              <Link className="Nav" to="/signin">
                Login
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
