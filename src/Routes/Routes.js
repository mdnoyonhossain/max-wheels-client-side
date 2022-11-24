import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import CategoryDetails from "../Pages/Home/ProductCategory/CategoryDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main/Main");
const { default: Home } = require("../Pages/Home/Home/Home");
const { default: ErrorPage } = require("../Pages/Shared/ErrorPage/ErrorPage");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:id',
                element: <PrivateRoutes><CategoryDetails></CategoryDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/productCategory/${params.id}`)
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
    }
]);

export default router;