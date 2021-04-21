import React from "react";
import rightarrow from "../assets/right-arrow.svg";

import { useHistory } from "react-router-dom";
function AppCard({
  id,
  appName,
  publisherName,
  revenue,
  adRequest,
  adResponse,
  impressions,
}) {
  const history = useHistory();
  const formatter = (num) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  };
  return (
    <div className="card">
      <div className="card-header">
        <div
          style={{
            height: "70px",
            width: "70px",
            padding: "0px 5px 0px 0px",
            background: `hsla( ${Math.floor(
              Math.random() * 360
            )} , 100%, 70%, 1)`,
          }}
        ></div>
        <div className="app-container">
          <h2 className="card-heading">{appName}</h2>
          <div role="doc-subtitle-grayed">{publisherName}</div>
        </div>
        <img
          className="right-arrow"
          src={rightarrow}
          alt="click to view in detail"
          onClick={() => {
            history.push(`/app/${id}`);
          }}
        />
      </div>
      <div className="stats">
        <div className="stat">
          <div role="doc-subtitle">Revenue</div>
          <h2 class="card-heading">{formatter(revenue)}</h2>
        </div>
        <div className="stat">
          <div role="doc-subtitle">Ad Requests</div>
          <h2 class="card-heading">{formatter(adRequest)}</h2>
        </div>
        <div className="stat">
          <div role="doc-subtitle">Ad Response</div>
          <h2 class="card-heading">{formatter(adResponse)}</h2>
        </div>
        <div className="stat">
          <div role="doc-subtitle">Impressions</div>
          <h2 class="card-heading">{formatter(impressions)}</h2>
        </div>
      </div>
    </div>
  );
}

export default AppCard;
