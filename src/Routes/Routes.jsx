import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import ChefSection from "../Pages/ChefSection/ChefSection";
import ChefRecipes from "../Pages/ChefRecipes/ChefRecipes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <ChefSection></ChefSection>,
                loader: () => fetch('http://localhost:5000/chef')
            },
            {
                path:"/",
                element:<Home></Home>
            }

        ]
    },
    {
        path: "/blog",
        element: <Blog></Blog>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: '/registration',
        element: <Register></Register>
    },
    {

        path: '/chefRecipes/:id',
        element: <ChefRecipes />,
        loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)

    }
]);
export default router;