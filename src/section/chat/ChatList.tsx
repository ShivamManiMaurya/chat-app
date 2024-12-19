import React from "react";

// mui imports
import {
  Divider,
  Stack,
  Typography,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// local imports
import { Some, padZero } from "../../helpers";

const ChatList = () => {
  const handleSearch = () => {};

  return (
    <Stack width={"26%"}>
      <Stack
        display={"flex"}
        direction={"row"}
        justifyContent={"left"}
        alignItems={"center"}
        p={2}>
        <Typography pr={"0.5rem"}>Active Conversations</Typography>
        <Typography
          border={"1px solid lightgray"}
          pl={"0.2rem"}
          pr={"0.2rem"}
          borderRadius={"0.5rem"}
          bgcolor={"	#f3f6f4"}>
          {padZero(7, 2)}
        </Typography>
      </Stack>
      <Divider />

      <FormControl sx={{ m: 1 }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-password"
          type={"text"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleSearch} edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          notched={false}
          sx={{
            "& .MuiOutlinedInput-input": {
              padding: 0,
              pl: 1,
            },
          }}
          placeholder="Search"
        />
      </FormControl>
    </Stack>
  );
};

export default ChatList;
