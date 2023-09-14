import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AuthProvider from "./components/Provider/AuthProvider";
import UpdateProvider from "./components/Provider/UpdateProvider";
import RecipeProvider from "./components/Provider/RecipeProvider";
import { LikedRecipesProvider } from "./components/Provider/LikedRecipesProvider";
import ShoppingProvider from "./components/Provider/ShoppingProvider";
import LikedUsersProvider from "./components/Provider/LikedUsersProvider";
import ReactGA from "react-ga4";

ReactGA.initialize("G-GH9C2R3EQH");

function App() {
  //const user = useLoaderData();

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <AuthProvider>
        <UpdateProvider>
          <RecipeProvider>
            <LikedRecipesProvider>
              <LikedUsersProvider>
                <ShoppingProvider>
                  <Header />
                  <div className="d-flex flex-column flex-fill">
                    <Suspense>
                      <Outlet />
                    </Suspense>
                  </div>
                  <Footer />
                </ShoppingProvider>
              </LikedUsersProvider>
            </LikedRecipesProvider>
          </RecipeProvider>
        </UpdateProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
