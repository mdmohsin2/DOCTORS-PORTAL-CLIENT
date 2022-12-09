import Main from "../../Layout/Main";
import Appointment from "../../Page/Appointment/Appointment/Appointment";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login/Login";
import SignUp from "../../Page/SignUp/SignUp/SignUp";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DashboardLayout from "../../DashboardLayout/DashboardLayout";
import MyAppoinment from "../../Page/Dashboard/MyAppoinment/MyAppoinment";
import AllUser from "../../Page/Dashboard/AllUser/AllUser";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddDoctor from "../../Page/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../Page/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../../Page/Dashboard/Payment/Payment";
import DisplayError from "../../Page/Shared/DisplayError/DisplayError";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppoinment></MyAppoinment>
            },
            {
                path: '/dashboard/alluser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader:({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    }
])

export default router;