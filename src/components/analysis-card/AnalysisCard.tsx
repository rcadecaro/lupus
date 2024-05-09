import React from "react";
import Rating from "../rating/Rating.tsx";
import Typography from "../typography/Typography.tsx";
import "./AnalysisCard.css";

export default function AnalysisCard({ analysis, metric }) {
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
    <div className="AnalysisCard">
      <div className="AnalysisRatingContainer">
        <Rating
          variant="major"
          grade={analysis[metric]["assessment"]["grade"]}
        />
        <Typography variant="Secondary" color="black">
          {getMetricName(metric)}
        </Typography>
      </div>

      <div className="Review">
        <div className="reviewContainer">
          <Typography variant="Secondary" color="black">
            {analysis !== undefined &&
              analysis[metric]["assessment"]["feedback"]}
          </Typography>

          <Typography variant="Secondary" color="black">
            {analysis !== undefined &&
              analysis[metric]["assessment"]["improvement_areas"]}
          </Typography>

          <Typography variant="Secondary" color="black">
            {analysis !== undefined &&
              analysis[metric]["assessment"]["positive_points"]}
          </Typography>
        </div>
      </div>
    </div>
  );
}
