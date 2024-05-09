import React from "react";
import "./Navbar.css";

import Typography from "../typography/Typography.tsx";

export default function Navbar() {
  return (
    <div className="Navbar">
      <Typography color={"white"} variant={"Primary"}>
        LUPUS
      </Typography>
    </div>
  );
}
