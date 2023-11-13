import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import useElectronApi from "@hooks/useElectronApi";

function Header() {
  const [count, setCount] = useState(0);
  const isApiAccessible = useElectronApi();

  function sendMsg() {
    if (!isApiAccessible) {
      return;
    }
    window.api.sendMessage(`Hello from React!  count:${count}`);
    console.log("sending msg to electron, check the node console");
    setCount(() => count + 1);
  }
  return (
    <Stack direction="row">
      <Typography>
        <Link to="/">Home</Link>
      </Typography>
      <Typography>
        <Link to="/about">About</Link>
      </Typography>
      <Button variant="contained" onClick={sendMsg} disabled={!isApiAccessible}>
        Send Message
      </Button>
    </Stack>
  );
}

export default Header;
