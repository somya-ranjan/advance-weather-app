import * as React from "react";
import { Dialog, DialogContent, Typography } from "@mui/material";

function ErrorModal(props) {
  return (
    <Dialog open={true} sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
      <DialogContent sx={{ height: "50vh" }}>
        <Typography variant="h1" textAlign="center" color="red">
          <i className="far fa-times-circle" />
        </Typography>
        <Typography
          variant="h5"
          textAlign="center"
          textTransform="capitalize"
          mt={1}>
          {props.message} <br />
          please enable / allow location access in your mobile / web browser
          settings to proceed ahead. <br /> <br />
          Thank You !
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

export default ErrorModal;
