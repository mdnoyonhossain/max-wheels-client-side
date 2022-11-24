import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";

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

        ]
    }
]);

export default router;