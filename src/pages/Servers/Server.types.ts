export interface IServerData {
  data: any;
  error: boolean;
}

export interface IServerStatus {
  status: string;
}

export interface IServerBoolean {
  valid: boolean;
}

export interface IServerSockets {
  sockets: string[];
}

export interface IWorker {
  wait_time: number;
  workers: number;
  waiting: number;
  idle: number;
  time_to_return: number;
  recently_blocked_keys: (string | number)[][];
  top_keys: (string | number)[][];
}

export interface IServerWorkers {
  workersObj: IWorker;
  workersType: string;
}

export interface IServerTableDataType {
  key: number;
  name: string;
  wait_time: number;
  workers: number;
  waiting: number;
  idle: number;
  recently_blocked_keys: (string | number)[][];
  time_to_return: number;
  top_keys: (string | number)[][];
}