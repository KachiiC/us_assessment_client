import React, { createContext, useReducer, ReactNode } from "react";

export interface AppState {
  servers: {
    [key: string]: Object;
  };
  loading: boolean;
  error: boolean;
}

export interface Action {
  type: "load_servers" | "refresh_server";
  payload: any;
}

export const initialState: AppState = {
  servers: {},
  loading: true,
  error: false
};

export interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

export interface AppProviderProps {
  children: ReactNode;
}

export const appReducer = (state: AppState, { type, payload }: Action): AppState => {
  switch (type) {
    case "load_servers":
      return {
        ...state,
        ...payload
      };
    case "refresh_server":
      return {
        ...state,
        servers: {
          ...state.servers,
          [payload.server_name]: payload.data
        }
      };
    default:
      return state;
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const contextValue: AppContextType = {
    state,
    dispatch
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContext;
