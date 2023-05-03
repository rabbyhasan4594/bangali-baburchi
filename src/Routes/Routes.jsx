import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import ChefSection from "../Pages/ChefSection/ChefSection";

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

        ]
    },
    {
        path:"/blog",
        element:<Blog></Blog>,
    },
    {
        path:"/login",
        element:<Login></Login>,
    },
    {
        path: '/registration',
        element: <Register></Register>
    }, 
]);
export default router;