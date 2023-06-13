import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Register from "./pages/register/Register";
import App from "./App";
import ErrorPage from "./ErrorPage/ErrorPage";
import Login from "./pages/login/Login";
import AddRecipe from "./pages/addRecipe/AddRecipe";
import AddRecipeTest from "./pages/addRecipe/AddRecipeTest";
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
        path: "/register",
        element: <Register />,
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
        path: "/addRecipeTest",
        element: (
          <ProtectedRoute>
            <AddRecipeTest />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
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
        )
      },
      {
        path: "/Admin/recipes",
        element: (
            <ProtectedRouteAdmin>
                <AdminRecipes />
            </ProtectedRouteAdmin>
        )
      },
      {
        path: "/Admin/users",
        element: (
            <ProtectedRouteAdmin>
                <AdminUsers />
            </ProtectedRouteAdmin>
        )
      },
      {
        path: "/Admin/cookingType",
        element: (
            <ProtectedRouteAdmin>
                <AdminCookingType />
            </ProtectedRouteAdmin>
        )
      },
      {
        path: "/Admin/dietType",
        element: (
            <ProtectedRouteAdmin>
                <AdminDietType />
            </ProtectedRouteAdmin>
        )
      },
    ],
  },
]);
