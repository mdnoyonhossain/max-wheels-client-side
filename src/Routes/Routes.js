import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../Pages/Dashboard/Dashboard/AllSeller/AllSeller";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import ProductReported from "../Pages/Dashboard/ProductReported/ProductReported";
import CategoryDetails from "../Pages/Home/ProductCategory/CategoryDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import AdminRoutes from "./AdminRoutes";
import BuyerRoute from "./BuyerRoute";
import PrivateRoutes from "./PrivateRoutes";
import SellerRoute from "./SellerRoute";

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
                path: '/blog',
                element: <Blog></Blog>
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
                loader: ({ params }) => fetch(`https://maxwheels-server.vercel.app/productCategory/${params.id}`)
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard/myorder',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/addaproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoutes><AllSeller></AllSeller></AdminRoutes>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoutes><AllBuyer></AllBuyer></AdminRoutes>
            },
            {
                path: '/dashboard/productreport',
                element: <AdminRoutes><ProductReported></ProductReported></AdminRoutes>
            },
        ]
    }
]);

export default router;