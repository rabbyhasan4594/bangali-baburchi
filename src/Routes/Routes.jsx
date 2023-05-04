import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import ChefSection from "../Pages/ChefSection/ChefSection";
import ChefRecipes from "../Pages/ChefRecipes/ChefRecipes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
        element: <ChefRecipes />,
        errorElement: <ErrorPage />,
        loader: ({params}) => fetch(`https://bangali-baburchi-server-rabbyhasan4594.vercel.app/chef/${params.id}`)

    }
]);
export default router;