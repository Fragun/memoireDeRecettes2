import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Register from "./pages/register/Register";
import App from "./App";
import ErrorPage from "./ErrorPage/ErrorPage";
import Login from "./pages/login/Login";
import AddRecipe from "./pages/addRecipe/AddRecipe";
import { userLoader } from "./loaders/userLoader";
import Profile from "./pages/Account/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import RecipePage from "./pages/recipePage/RecipePage";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ProtectedRouteAdmin from "./components/ProtectedRoute/ProtectedRouteAdmin";
import AdminPage from "./pages/Admin/AdminPage";
import AdminRecipes from "./pages/Admin/AdminRecipes";
import AdminUsers from "./pages/Admin/AdminUsers";
import AdminCookingType from "./pages/Admin/AdminCookingType";
import AdminDietType from "./pages/Admin/AdminDietType";
import AdminMealType from "./pages/Admin/AdminMealType";
import AdminMoment from "./pages/Admin/AdminMoment";
import MyRecipesPage from "./pages/MyRecipes/MyRecipePage";
import FavoritesPage from "./pages/MyFavorites/FavoritesPage";
import ShoppingList from "./pages/shoppingList/ShoppingList";
import UseTerms from "./pages/rgpd/UseTerms";
import Mentions from "./pages/rgpd/Mentions";
import Confidentiality from "./pages/rgpd/Confidentiality";
import Cookies from "./pages/rgpd/Cookies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: userLoader,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/cookies",
        element: <Cookies />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/useTerms",
        element: <UseTerms />,
      },
      {
        path: "/confidentiality",
        element: <Confidentiality />,
      },
      {
        path: "/mentions",
        element: <Mentions />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/recipePage/:id",
        element: <RecipePage />,
      },
      {
        path: "/addRecipe",
        element: (
          <ProtectedRoute>
            <AddRecipe />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "/myRecipesPage/:idUser",
        element: (
          <ProtectedRoute>
            <MyRecipesPage />
          </ProtectedRoute>
        ),
      },

      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Admin",
        element: (
          <ProtectedRouteAdmin>
            <AdminPage />
          </ProtectedRouteAdmin>
        ),
      },
      {
        path: "/Admin/recipes",
        element: (
          <ProtectedRouteAdmin>
            <AdminRecipes />
          </ProtectedRouteAdmin>
        ),
      },
      {
        path: "/Admin/users",
        element: (
          <ProtectedRouteAdmin>
            <AdminUsers />
          </ProtectedRouteAdmin>
        ),
      },
      {
        path: "/Admin/cookingType",
        element: (
          <ProtectedRouteAdmin>
            <AdminCookingType />
          </ProtectedRouteAdmin>
        ),
      },
      {
        path: "/Admin/dietType",
        element: (
          <ProtectedRouteAdmin>
            <AdminDietType />
          </ProtectedRouteAdmin>
        ),
      },
      {
        path: "/Admin/mealType",
        element: (
          <ProtectedRouteAdmin>
            <AdminMealType />
          </ProtectedRouteAdmin>
        ),
      },
      {
        path: "/Admin/moment",
        element: (
          <ProtectedRouteAdmin>
            <AdminMoment />
          </ProtectedRouteAdmin>
        ),
      },
      {
        path: "/FavoritesPage",
        element: (
          <ProtectedRoute>
            <FavoritesPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/ShoppingList",
        element: (
          <ProtectedRoute>
            <ShoppingList />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
