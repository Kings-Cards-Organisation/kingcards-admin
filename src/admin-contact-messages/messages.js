import Avatar from "@material-ui/core/Avatar";
import React from "react";
import red from "@material-ui/core/colors/red";

export default [
  {
    from: "Ali Connors",
    message: "My transaction has been pending for 1 week",
    avatar: (
      <Avatar
        alt="Ali Connors"
        src={`${process.env.PUBLIC_URL}/static/images/face3.jpg`}
      />
    ),
    subject: "Delayed transaction"
  },
  {
    from: "Trevor Hansen",
    message: "Request to include payouts in Dogecoin",
    subject: "Cryptocurrency support request"
  },
  {
    from: "Sandra Adams",
    message: "Payout has not reflected in my Blockchain wallet after 3 days",
    avatar: (
      <Avatar
        alt="Sandra Adams"
        src={`${process.env.PUBLIC_URL}/static/images/face4.jpg`}
      />
    ),
    subject: "Please confirm transaction"
  },
  {
    from: "Jeff Jones",
    message: "I am new to this platform, please how can i do this...",
    avatar: (
      <Avatar aria-label="Post" style={{ backgroundColor: red[500] }}>
        J
      </Avatar>
    ),
    subject: "Assistance needed"
  }
];
