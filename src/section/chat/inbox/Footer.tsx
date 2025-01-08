import * as React from "react";

// mui imports
import { Paper, InputBase, Divider, IconButton, Stack } from "@mui/material";
import DirectionsIcon from "@mui/icons-material/Directions";
import Emoji from "@mui/icons-material/EmojiEmotionsOutlined";
import Attachment from "@mui/icons-material/AttachFileOutlined";

export default function Footer() {
  return (
    <Stack p={"0.5rem 1rem"} borderTop={"1px solid #e5e6eb"}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          border: "1px solid 	#e5e6eb",
        }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter your message"
          inputProps={{ "aria-label": "Enter your message" }}
        />
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <Attachment />
        </IconButton>
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <Emoji />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <DirectionsIcon />
        </IconButton>
      </Paper>
    </Stack>
  );
}
