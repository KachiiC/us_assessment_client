import "./styles/App.scss";
import { Router } from "./pages/Router";
import "./styles/App.scss";
import { useEffect } from "react";
import { useAppContext } from "./context/useAppContext";

const App = () => {
  const fetchUrl = `${process.env.REACT_APP_API_ALL_ENDPOINT}`;

  const { dispatch } = useAppContext();

  useEffect(() => {
    const serverFetch = () => {
      fetch(fetchUrl)
        .then((res) => res.json())
        .then((resData) => {
          dispatch({
            type: "load_servers",
            payload: {
              servers: resData,
              loading: false
            }
          });
        })
        .catch((err) => {
          console.log("serverFetch error", err);

          dispatch({
            type: "load_servers",
            payload: {
              servers: {},
              loading: false,
              error: true
            }
          });
        });
    };

    serverFetch();

    // 30 second intervals
    const intervalId = setInterval(serverFetch, 120000);

    return () => clearInterval(intervalId);
  }, [fetchUrl, dispatch]);

  return <Router />;
};

export default App;
