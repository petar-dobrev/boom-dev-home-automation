import { useState } from "react";
import classNames from "classnames";

import roomsData from "../../../data/rooms.json";

import {
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
} from "@mui/material";

import User from "../user/User";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import styles from "./Navigation.module.scss";

const { rooms } = roomsData;

export default function Navigation() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classNames(styles["navigation-container"])}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "245px" },
        }}
      >
        <List>
          <ListItem>
            <User name="Tst Testev" avatar="/images/avatar.png" />
            <IconButton
              aria-label="more"
              id="user-button"
              aria-controls={open ? "user-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClickUserMenu}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="user-menu"
              MenuListProps={{
                "aria-labelledby": "user-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>Logout</MenuItem>
            </Menu>
          </ListItem>
          <ListItem className={classNames(styles["list-item-heading"])}>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlinedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Appartement" />
              <Badge
                badgeContent={rooms.length}
                color="secondary"
                sx={{
                  "& .MuiBadge-badge": {
                    borderRadius: "7px",
                    width: "25px",
                    height: "25px",
                  },
                }}
              ></Badge>
            </ListItemButton>
          </ListItem>
          {rooms.map((room) => (
            <ListItem key={room.id}>
              <ListItemButton>
                <ListItemIcon>
                  <BedOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={room.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
