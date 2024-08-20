import { useParams } from "react-router-dom";
import SiteNavbar from "../../components/SiteNavbar";
import { ServerData } from "./ServerData";
import "./Server.scss";
import { SiteLoading } from "../../components/SiteLoading";
import { regionList } from "../../data/regionList";
import { useAppContext } from "../../context/useAppContext";

export const Server = () => {
  const { region } = useParams();
  const { state } = useAppContext();

  const regionName = regionList.find(({ value }) => value === region)?.name;

  const resultsData = state.servers[region as string]

  return (
    <>
      <SiteNavbar />
      <div className="page-container">
        <div className="server-container">
          <h1>{regionName} ({region})</h1>
          {state.loading ? (
            <SiteLoading />
          ) : (
            <ServerData data={resultsData} error={state.error} />
          )}
        </div>
      </div>
    </>
  );
};
