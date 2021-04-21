import React, { useEffect } from "react";
import settingsicon from "../assets/settings.svg";
import AppCard from "./AppCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllApps } from "./../actions/appActions";
import SimpleBackdrop from "./SimpleBackdrop";

function AppList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allApps);
  const appList = data.data;
  useEffect(() => {
    dispatch(getAllApps());
  }, []);
  return (
    <div className="applist-container">
      <SimpleBackdrop open={data.loading} />
      <div className="h3 applist-heading">
        Apps
        <img src={settingsicon} className="settingicon" alt="settings" />
      </div>
      <div className="applist">
        {appList &&
          appList.map((a) => (
            <AppCard
              id={a.id}
              appName={a.appName}
              publisherName={a.publisherName}
              revenue={a.revenue}
              adRequest={a.adRequest}
              adResponse={a.adResponse}
              impressions={a.impressions}
            />
          ))}
      </div>
    </div>
  );
}

export default AppList;
