export interface AppState {
  servers: any;
}

export interface Action {
  type: "render_servers" | "refresh_server";
  payload: {
    servers: any;
    loading: boolean;
    error: boolean;
  };
}

export const initialState: AppState = {
  servers: {}
};
