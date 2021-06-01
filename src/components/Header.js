import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
} from "@material-ui/core";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import PowerSettingsNewOutlinedIcon from "@material-ui/icons/PowerSettingsNewOutlined";
function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item >
            <InputBase />
          </Grid>
          <Grid item sm>

          </Grid>
          <Grid item >
            <IconButton>
              <Badge badgeContent={6} color="secondary">
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={6} color="secondary">
                <ChatBubbleOutlineOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="secondary">
                <PowerSettingsNewOutlinedIcon />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
