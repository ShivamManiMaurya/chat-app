import React from "react";

// mui imports
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Button, Divider, Stack, TextField, Typography } from "@mui/material";

// local imports
import { LoginIcon, GoogleIcon } from "../../assets/svg/Index";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Stack
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      direction={"row"}
      height={"100vh"}>
      <Stack
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"50%"}>
        <Typography
          variant={"h6"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          color="textSecondary">
          <QuestionAnswerIcon /> Chati
        </Typography>
        <Typography
          variant={"body1"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          color="textSecondary">
          Hey there!, Welcome to Chati
        </Typography>
        <LoginIcon />
      </Stack>
      <Divider orientation="vertical" flexItem />
      <Stack
        width={"50%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}>
        <Stack width={"50%"} gap={2}>
          <Stack>
            <Typography variant="body2" color="textSecondary">
              Start for free
            </Typography>
            <Typography variant="h5" fontWeight={"700"}>
              Sign in to Chati
            </Typography>
          </Stack>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            type="email"
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
          />
          <Button variant="contained">Sign In</Button>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<GoogleIcon />}>
            Sign in with Google
          </Button>
          <Typography variant="body2" align="center">
            Don't have any account? <Link to={"/auth/signup"}>Sign Up</Link>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
