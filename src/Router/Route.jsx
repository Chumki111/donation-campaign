import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donations/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonationPage from "../Pages/DonationPage/DonationPage";



const myCreatedRouter =  createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [

            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('/data.json')
            },
            {
                path : '/donations',
                element : <Donation></Donation>
            },
            {
                path : '/statistics',
                element : <Statistics></Statistics>
            },
            {
                path : '/donation/:id',
                element : <DonationPage></DonationPage>,
                loader : () => fetch(`/data.json`)
            }
        ]
    }
])

export default  myCreatedRouter;