import React from "react";

// mui imports
import { IconButton, Stack } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeSwitch from "../../components/DarkModeSwitch";

interface IProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const Sidebar: React.FC<IProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <Stack
      width={"4%"}
      height={"100vh"}
      bgcolor={"lightblue"}
      alignItems={"center"}
      display={"flex"}
      justifyContent={"space-between"}
      p={"1rem"}>
      <IconButton sx={{ borderRadius: "0.5rem" }}>
        <ChatBubbleIcon />
      </IconButton>
      <Stack gap={2} width={"100%"}>
        <DarkModeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <IconButton sx={{ borderRadius: "0.5rem" }}>
          <LogoutIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
