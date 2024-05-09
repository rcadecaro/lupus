import { ReactNode } from "react";
import Typography from "../typography/Typography.tsx";

import "./Button.css";

interface ButtonType {
  onClick: any;
  children: ReactNode;
  variant: string;
}

export default function Button({ onClick, children, variant }: ButtonType) {
  return (
    <>
      {variant === "File" ? (
        <>
          {" "}
          <label htmlFor="file-upload" className="custom-file-upload">
            <Typography color={"black"} variant={"Primary"}>
              {children}
            </Typography>
          </label>
          <input id="file-upload" type="file" onChange={onClick} />
        </>
      ) : (
        <div className="Button" onClick={onClick}>
          <Typography color={"white"} variant={"Primary"}>
            {children}
          </Typography>
        </div>
      )}
    </>
  );
}
