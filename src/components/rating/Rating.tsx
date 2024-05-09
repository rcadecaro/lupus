import React from "react";
import Typography from "../typography/Typography.tsx";
import "./Rating.css";

export default function Rating({ variant, grade }) {
  const renderRating = () => {
    if (grade < 50) {
      return (
        <div className={`Rating ${variant} red`}>
          <Typography
            color={"red"}
            variant={variant == "major" ? "H1" : "Primary"}
          >
            {grade}
          </Typography>
        </div>
      );
    } else if (grade >= 50 && grade <= 89) {
      return (
        <div className={`Rating ${variant} yellow`}>
          <Typography
            color={"yellow"}
            variant={variant == "major" ? "H1" : "Primary"}
          >
            {grade}
          </Typography>
        </div>
      );
    } else {
      return (
        <div className={`Rating ${variant} green`}>
          <Typography
            color={"green"}
            variant={variant == "major" ? "H1" : "Primary"}
          >
            {grade}
          </Typography>
        </div>
      );
    }
  };

  return <>{renderRating()}</>;
}
