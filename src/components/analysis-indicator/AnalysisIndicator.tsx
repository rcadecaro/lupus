import React from "react";
import Rating from "../rating/Rating.tsx";
import Typography from "../typography/Typography.tsx";

import "./AnalysisIndicator.css";

export default function AnalysisIndicator({ analysis, metric }) {
  const getMetricName = (metric) => {
    switch (metric) {
      case "acessibility":
        return "Acessibilidade";
      case "consistency":
        return "Consistência";
      case "usability":
        return "Usabilidade";
      case "hierarchy":
        return "Hierarquia";
      case "aesthetic":
        return "Estética";
    }
  };

  return (
    <>
      <div className="AnalysisIndicatorContainer">
        <Rating
          variant="minor"
          grade={analysis[metric]["assessment"]["grade"]}
        />

        <Typography color={"black"} variant={"Secondary"}>
          {getMetricName(metric)}
        </Typography>
      </div>
    </>
  );
}
