import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
import { Outlet, useLoaderData } from "react-router-dom";
import { Suspense } from "react";


function App() {

  const user = useLoaderData();
  console.log(user);

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div>
      <Suspense>
        <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
