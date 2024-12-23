import React, { Fragment } from "react";

// mui imports
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { Avatar, ButtonBase, Stack, Typography } from "@mui/material";

// local imports
import { Some } from "../../../helpers";

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    faceImage: "https://picsum.photos/seed/alice/100",
    msg: "Hello! How are you?",
  },
  {
    id: 2,
    name: "Bob Smith",
    faceImage: "https://picsum.photos/seed/bob/100",
    msg: "Just checking in.",
  },
  {
    id: 3,
    name: "Charlie Brown",
    faceImage: "https://picsum.photos/seed/charlie/100",
    msg: "Good morning!",
  },
  {
    id: 4,
    name: "Diana Rose",
    faceImage: "https://picsum.photos/seed/diana/100",
    msg: "Can we reschedule the meeting?",
  },
  {
    id: 5,
    name: "Eve Williams",
    faceImage: "https://picsum.photos/seed/eve/100",
    msg: "I’ll get back to you soon.",
  },
  {
    id: 6,
    name: "Frank Martin",
    faceImage: "https://picsum.photos/seed/frank/100",
    msg: "Thank you!",
  },
  {
    id: 7,
    name: "Grace Lee",
    faceImage: "https://picsum.photos/seed/grace/100",
    msg: "What’s the status?",
  },
  {
    id: 8,
    name: "Henry Davis",
    faceImage: "https://picsum.photos/seed/henry/100",
    msg: "Can we have a quick chat?",
  },
  {
    id: 9,
    name: "Ivy Taylor",
    faceImage: "https://picsum.photos/seed/ivy/100",
    msg: "See you tomorrow!",
  },
  {
    id: 10,
    name: "Jack Wilson",
    faceImage: "https://picsum.photos/seed/jack/100",
    msg: "Let me know if you need anything.",
  },
  {
    id: 11,
    name: "Eve Williams",
    faceImage: "https://picsum.photos/seed/eve/100",
    msg: "I’ll get back to you soon.",
  },
  {
    id: 12,
    name: "Frank Martin",
    faceImage: "https://picsum.photos/seed/frank/100",
    msg: "Thank you!",
  },
  {
    id: 13,
    name: "Grace Lee",
    faceImage: "https://picsum.photos/seed/grace/100",
    msg: "What’s the status?",
  },
  {
    id: 14,
    name: "Henry Davis",
    faceImage: "https://picsum.photos/seed/henry/100",
    msg: "Can we have a quick chat?",
  },
];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatListUser = () => {
  return (
    <Stack
      sx={{
        overflowY: "auto",
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For Internet Explorer
        "&::-webkit-scrollbar": {
          display: "none", // For Chrome, Safari, and Edge
        },
      }}>
      {users.map((user) => (
        <Stack px="1rem" py="0.5rem">
          <ButtonBase
            sx={{
              borderRadius: "0.5rem",
              textAlign: "left",
              justifyContent: "left",
              "&:hover": {
                background: "	#f3f6f4",
              },
            }}>
            <Stack
              display={"flex"}
              direction={"row"}
              justifyContent={"left"}
              alignItems={"center"}
              px={"0.5rem"}
              py={"0.2rem"}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot">
                <Avatar alt="img" src={user.faceImage} />
              </StyledBadge>
              <Stack pl={"0.5rem"}>
                <Typography variant="body1">{user.name}</Typography>
                <Typography color="gray" variant="subtitle2">
                  {user.msg.length > 30
                    ? user.msg.slice(0, 27) + "..."
                    : user.msg}
                </Typography>
              </Stack>
            </Stack>
          </ButtonBase>
        </Stack>
      ))}
    </Stack>
  );
};

export default ChatListUser;
