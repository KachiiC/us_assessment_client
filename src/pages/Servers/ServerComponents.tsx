import { Tag } from "antd";
import {
  IServerSockets,
  IServerStatus,
  IServerBoolean,
  IWorker
} from "./Server.types";
import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";

export const ServerStatus = (status: IServerStatus) => {
  switch (status.status) {
    case "ok":
      return <Tag color="success">ok</Tag>;
    case "error":
      return <Tag color="error">error</Tag>;
    case "warning":
      return <Tag color="warning">Warning</Tag>;
    default:
      return <Tag color="magenta">Unknown Status</Tag>;
  }
};

export const ServerBoolean = ({ valid }: IServerBoolean) => {
  return <Tag color={valid ? "success" : "error"}>{JSON.stringify(valid)}</Tag>;
};

export const ServerSockets = ({ sockets }: IServerSockets) => {
  if (!sockets.length) {
    return <div className="server-tags-row">No Roles</div>;
  }

  const displayedSockets = sockets.map((tagName: string, index) => (
    <Tag color="processing" key={index}>
      {tagName}
    </Tag>
  ));

  return <div className="server-tags-row">{displayedSockets}</div>;
};

// export const ServerWorkers = ({ workersObj, workersType }: IServerWorkers) => {
//   return (

//     // <div className="service-worker-single">
//     //   <div className="service-worker-single-title">
//     //     <span>Type:</span>&nbsp;{workersType}
//     //   </div>
//     //   <div className="service-worker-single-text">
//     //     <span>wait_time:</span> {workersObj?.wait_time}
//     //   </div>
//     //   <div className="service-worker-single-text">
//     //     <span>workers:</span> {workersObj?.workers}
//     //   </div>
//     //   <div className="service-worker-single-text">
//     //     <span>waiting:</span> {workersObj?.waiting}
//     //   </div>
//     //   <div className="service-worker-single-text">
//     //     <span>idle:</span> {workersObj?.idle}
//     //   </div>
//     //   <div className="service-worker-single-text">
//     //     <span>time_to_return:</span> {workersObj?.time_to_return}
//     //   </div>
//     // </div>
//   );
// };

interface IServerWorkersList {
  workers: (string | IWorker)[][];
}

export const ServerWorkersList = ({ workers }: IServerWorkersList) => {
  if (!workers.length) {
    return <div>No Workers</div>;
  }

  const displayedWorkersData = workers.map((worker, index) => {
    const title = worker[0] as string;
    const entries = Object.entries(worker[1]);
    const numberItems = entries.filter((item) => typeof item[1] === "number");

    const items: DescriptionsProps["items"] = numberItems.map(
      (item, index) => ({
        key: index,
        label: item[0],
        children: item[1] as string
      })
    );

    return {
      title,
      key: index,
      items
    };
  });

  const displayedWorkers = displayedWorkersData.map((worker, index) => {
    return (
      <div className="service-worker-single">
        <Descriptions
          key={index}
          title={worker.title}
          bordered
          column={1}
          items={worker.items}
        />
      </div>
    );
  });

  return <div className="service-worker-list">{displayedWorkers}</div>;
};
