import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import rightarrow from "../assets/right-arrow.svg";
import DetailsTable from "./../components/DetailsTable";
import { useDispatch, useSelector } from "react-redux";
import { getStatsById } from "./../actions/appActions";
import SimpleBackdrop from "../components/SimpleBackdrop";

function AppDetails() {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.statsById);
  const tableData = data.data;
  useEffect(() => {
    dispatch(getStatsById(id));
  }, []);
  return (
    <div className="appdetails">
      <SimpleBackdrop open={data.loading} />
      <div
        className="nav-branding"
        onClick={() => {
          history.push(`/`);
        }}
        aria-label="Adsoul"
      >
        adsoul
      </div>
      <div className="appdetails-heading">
        <img
          className="left-arrow"
          src={rightarrow}
          alt="go back to home"
          onClick={() => {
            history.push(`/`);
          }}
        />
        <div
          style={{
            height: "70px",
            width: "70px",
            padding: "0px 5px 0px 0px",
            background: `hsla( ${Math.floor(
              Math.random() * 360
            )} , 100%, 70%, 1)`,
            marginLeft: "1.5em",
          }}
        ></div>
        <div className="app-container">
          <h2 className="card-heading">{data.appName}</h2>
          <div role="doc-subtitle-grayed">{data.publisherName}</div>
        </div>
      </div>
      <div className="table">
        <DetailsTable tableData={tableData} />
      </div>
    </div>
  );
}

export default AppDetails;
