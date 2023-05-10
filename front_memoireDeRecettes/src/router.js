import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Register from "./pages/register/Register";
import App from "./App";
import ErrorPage from "./ErrorPage/ErrorPage";
import Login from "./pages/login/Login";
import AddRecipe from "./pages/addRecipe/AddRecipe";
import AddRecipeTest from "./pages/addRecipe/AddRecipeTest";
import { userLoader } from './loaders/userLoader';
import Profile from './pages/Account/Profile';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import RecipePage from "./pages/recipePage/RecipePage";

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
            element: <RecipePage/>
        },
        {
            path: "/addRecipe",
            element: 
            <ProtectedRoute>
            <AddRecipe />,
            </ProtectedRoute>
        },
        {
            path: "/addRecipeTest",
            element: 
            <ProtectedRoute>
            <AddRecipeTest />,
            </ProtectedRoute>
        },
        {
            path: "/profile",
            element: 
            <ProtectedRoute>
            <Profile />
            </ProtectedRoute>
        }
    ]
   } 
])