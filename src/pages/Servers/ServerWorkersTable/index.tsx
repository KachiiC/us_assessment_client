import type { GetProp, TableProps } from "antd";
import { Card, Empty, Statistic, Table } from "antd";
import { IServerTableDataType } from "../Server.types";
import DateObject from "react-date-object";
import "./ServerWorkersTable.scss";

type ColumnsType<T extends object> = GetProp<TableProps<T>, "columns">;

const tableColumns: ColumnsType<IServerTableDataType> = [
  { dataIndex: "name", title: "Name" },
  {
    dataIndex: "wait_time",
    title: "Wait Time",
    sorter: (a, b) => a.wait_time - b.wait_time
  },
  {
    dataIndex: "workers",
    title: "Workers",
    sorter: (a, b) => a.workers - b.workers
  },
  {
    dataIndex: "waiting",
    title: "Waiting",
    sorter: (a, b) => a.waiting - b.waiting
  },
  { dataIndex: "idle", title: "Idle", sorter: (a, b) => a.idle - b.idle },
  {
    dataIndex: "time_to_return",
    title: "Time to return",
    sorter: (a, b) => a.time_to_return - b.time_to_return
  }
];

interface IServerWorkersTable {
  tableData: IServerTableDataType[];
}

const ServerWorkersTable = ({ tableData }: IServerWorkersTable) => {
  const expandedRowRender = ({
    recently_blocked_keys,
    top_keys
  }: IServerTableDataType) => {
    const topKeysList = top_keys.map((obj, index) => {
      return (
        <Card
          key={index}
          bordered={false}
          className="workers-table-expanded-card"
          style={{ padding: "8px" }}
        >
          <Statistic
            title={obj[1]}
            value={obj[0]}
            valueStyle={{ fontSize: "16px", fontWeight: 600 }}
          />
        </Card>
      );
    });

    const blockedKeysList = recently_blocked_keys.map((obj, index) => {
      const date = new DateObject(obj[2]).format("DD/MM/YYYY hh:mm:ss a");

      return (
        <Card
          key={index}
          bordered={false}
          className="workers-table-expanded-card"
        >
          <Statistic
            title={date}
            value={obj[0]}
            valueStyle={{ fontSize: "16px", fontWeight: 600 }}
          />
        </Card>
      );
    });

    if (!topKeysList.length && !blockedKeysList.length) {
      return <Empty />;
    }

    return (
      <div className="workers-table-expanded">
        {top_keys.length > 0 && (
          <div className="workers-table-expanded-section">
            <div className="workers-table-expanded-title">Top Keys</div>
            <div className="workers-table-expanded-card-container">
              {topKeysList}
            </div>
          </div>
        )}
        {recently_blocked_keys.length > 0 && (
          <div className="workers-table-expanded-section">
            <div className="workers-table-expanded-title">
              Recently Blocked Keys
            </div>
            <div className="workers-table-expanded-card-container">
              {blockedKeysList}
            </div>
          </div>
        )}
      </div>
    );
  };

  const tableProps: TableProps<IServerTableDataType> = {
    size: "large",
    pagination: false,
    columns: tableColumns,
    expandable: {
      expandedRowRender
    }
  };

  return <Table {...tableProps} dataSource={tableData || []} />;
};

export default ServerWorkersTable;
