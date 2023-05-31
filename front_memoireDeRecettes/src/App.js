import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
import { Outlet, useLoaderData } from "react-router-dom";
import { Suspense, useEffect } from "react";
import AuthProvider from "./components/Provider/AuthProvider";
import UpdateProvider from "./components/Provider/UpdateProvider";
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-270085249-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  const user = useLoaderData();
  console.log(user);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <AuthProvider>
        <UpdateProvider>
        <Header />
        <div className="d-flex flex-column flex-fill">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
        <Footer />
        </UpdateProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
