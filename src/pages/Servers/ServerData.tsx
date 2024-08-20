import { Button, Card, Empty, Statistic } from "antd";
import { IServerData } from "./Server.types";
import { ServerSockets, ServerStatus, ServerBoolean } from "./ServerComponents";
import ServerWorkersTable from "./ServerWorkersTable";
import { useDataFetch } from "../../services/dataFetch";
import { useAppContext } from "../../context/useAppContext";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { LoadingOutlined, ReloadOutlined } from "@ant-design/icons";

export const ServerData = ({ data, error }: IServerData) => {
  const { dispatch } = useAppContext();
  const { region } = useParams();
  const [refreshing, setRefreshing] = useState(false);

  if (error) {
    return <Empty />;
  }

  const { services, stats } = data?.results;

  const regionWorkers = data.results.stats.server.workers.map(
    (obj: any, index: number) => {
      return {
        key: index,
        name: obj[0],
        ...obj[1]
      };
    }
  );

  const refreshCurrentServer = async () => {
    const fetchUrl = `${process.env.REACT_APP_API_ENDPOINT}/${region}`;

    setRefreshing(true)

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "refresh_server",
          payload: {
            [region as string]: data
          }
        });
        setRefreshing(false);
      })
      .catch((err) => {
        console.log("useDataFetch error", err);
        setRefreshing(false)
      });
  };

  return (
    <>
      <div className="server-data">
        <div className="server-overview">
          <div className="server-status-card">
            <h2>Status</h2>
            <div className="server-status-line">
              Server Status:&nbsp;
              <ServerStatus status={data?.status} />
            </div>
            <div className="server-status-line">
              Strict:&nbsp;
              <ServerBoolean valid={data?.strict} />
            </div>
            <div className="server-status-line">
              Roles:&nbsp;
              <ServerSockets sockets={data?.roles} />
            </div>
          </div>
          <div className="server-services-card">
            <h2>Services</h2>
            <div className="server-status-line">
              Redis:&nbsp;
              <ServerBoolean valid={services?.redis} />
            </div>
            <div className="server-status-line">
              Database:&nbsp;
              <ServerBoolean valid={services?.database} />
            </div>
          </div>
        </div>
        <div className="server-stats">
          <Card className="server-stats-single">
            <Statistic title="Servers Count" value={stats?.servers_count} />
          </Card>
          <Card className="server-stats-single">
            <Statistic title="Online" value={stats?.online} />
          </Card>
          <Card className="server-stats-single">
            <Statistic title="Session" value={stats?.session} />
          </Card>
          <Card className="server-stats-single">
            <Statistic
              title="Active Connections"
              value={stats?.server?.active_connections}
            />
          </Card>
          <Card className="server-stats-single">
            <Statistic title="Wait Time" value={stats?.server?.wait_time} />
          </Card>
        </div>
      </div>
      <div className="refresh-container">
        <Button
          type="primary"
          onClick={refreshCurrentServer}
          icon={refreshing ? <LoadingOutlined /> : <ReloadOutlined />}
        >
          Refresh Server
        </Button>
      </div>
      <div className="server-worker">
        <h2>Server Workers</h2>
        <ServerWorkersTable tableData={regionWorkers} />
      </div>
    </>
  );
};
