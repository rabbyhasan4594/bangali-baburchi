import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import ChefSection from "../components/ChefSection/ChefSection";
import ChefRecipes from "../components/ChefRecipes/ChefRecipes";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <ChefSection></ChefSection>,
                loader: () => fetch('https://bangali-baburchi-server-rabbyhasan4594.vercel.app/chef')
            },
        ]
    },
    {
        path: "/blog",
        element: <Blog></Blog>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login></Login>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/registration',
        element: <Register></Register>,
        errorElement: <ErrorPage />,

    },
    {

        path: '/chefRecipes/:id',
        element:  <PrivateRoute><ChefRecipes /></PrivateRoute>,
        errorElement: <ErrorPage />,
        loader: ({params}) => fetch(`https://bangali-baburchi-server-rabbyhasan4594.vercel.app/chef/${params.id}`)

    }
]);
export default router;