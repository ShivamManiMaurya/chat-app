import React from "react";

// mui imports
import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import theme from "../../../theme";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      display={"flex"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={2}
      py={1.7}
      position={"sticky"}>
      <Stack
        display={"flex"}
        direction={"row"}
        justifyContent={"left"}
        alignItems={"center"}>
        <Avatar alt="img" src={"https://picsum.photos/seed/henry/100"} />
        <Stack pl={"0.5rem"}>
          <Typography variant="body1">{"Henry Davis"}</Typography>
          <Typography color="gray" variant="subtitle2">
            {"Reply to message"}
          </Typography>
        </Stack>
      </Stack>
      <IconButton onClick={handleClick}>
        <MoreHorizIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default Header;
