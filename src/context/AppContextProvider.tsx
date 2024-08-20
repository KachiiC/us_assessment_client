import { ReactNode, useReducer } from 'react';
import AppContext, { initialState, AppContextType, appReducer } from './AppContext';
// import { appReducer } from './AppReducer';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const contextValue: AppContextType = {
    state,
    dispatch,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
