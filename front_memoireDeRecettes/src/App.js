import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
import { Outlet, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import AuthProvider from "./components/Provider/AuthProvider";


function App() {

  const user = useLoaderData();
  //console.log(user);

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <AuthProvider>
      <Header />
      <div className="d-flex flex-column flex-fill">
      <Suspense>
        <Outlet />
        </Suspense>
      </div>
      <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
