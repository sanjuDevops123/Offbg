import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";


const LandingLayout = lazy(() => import('../Modules/Portfolio/Home/Home'));
const IndividualsLayout = lazy(() => import('../Modules/Portfolio/UseCases/Individuals/Individuals'));
const PhotographersLayout = lazy(() => import('../Modules/Portfolio/UseCases/Photographers/Photographers'));
const MarketingLayout = lazy(() => import('../Modules/Portfolio/UseCases/Marketing/Marketing'));
const DevelopersLayout = lazy(() => import('../Modules/Portfolio/UseCases/Developers/Developers'));
const EcommerceLayout = lazy(() => import('../Modules/Portfolio/UseCases/Ecommerce/Ecommerce'));
const MediaLayout = lazy(() => import('../Modules/Portfolio/UseCases/Media/Media'));
const CarDealershipLayout = lazy(() => import('../Modules/Portfolio/UseCases/CarDealership/CarDealership'));
const ToolsLayout = lazy(() => import('../Modules/Portfolio/Tools/Tools'));
const AboutUsLayout = lazy(() => import('../Modules/Portfolio/AboutUs/AboutUs'));
const RefundsLayout = lazy(() => import('../Modules/Portfolio/Refunds/Refunds'));
const ContactUsLayout = lazy(() => import('../Modules/Portfolio/ContactUs/ContactUs'));
const FaqLayout = lazy(() => import('../Modules/Portfolio/Faq/Faq'));

const PricingLayout = lazy(() => import('../Modules/Portfolio/Pricing/Pricing'));
const UploadLayout = lazy(() => import('../Modules/Portfolio/Upload/Upload'));

const AuthLayout = lazy(() => import('../Modules/Auth/Auth'));

const DashboardLayout = lazy(() => import('../Modules/Dashboard/Dashboard'));


export const routes = ({ actions, showSuccess }) => (
    [
        {
            path: '/auth',
            element: (<Outlet />),
            children: [
                {
                    index: true,
                    element: <Navigate to="/auth/login" />
                },
                {
                    path: 'login',
                    element: <AuthLayout />
                },
                {
                    path: 'signup',
                    element: <AuthLayout />
                }

            ]
        },
        {
            path: '/',
            element: <Navigate to="/home" />,
        },
        {
            path: '/home',
            element: (<LandingLayout />)
        },
        {
            path: '/dashboard',
            element: (<PrivateRoute showSuccess={showSuccess} actionName={'User view'} actions={actions} component={DashboardLayout} />)
        },
        {
            path: '/upload',
            element: (<UploadLayout />)
        },
        {
            path: '/pricing',
            element: (<PricingLayout />)
        },
        {
            path: '/individuals',
            element: (<IndividualsLayout />)
        },
        {
            path: '/photographers',
            element: (<PhotographersLayout />)
        },
        {
            path: '/marketing',
            element: (<MarketingLayout />)
        },
        {
            path: '/developers',
            element: (<DevelopersLayout />)
        },
        {
            path: '/ecommerce',
            element: (<EcommerceLayout />)
        },
        {
            path: '/media',
            element: (<MediaLayout />)
        },
        {
            path: '/car-dealership',
            element: (<CarDealershipLayout />)
        },
        {
            path: '/tools',
            element: (<ToolsLayout />)
        },
        {
            path: '/refunds',
            element: (<RefundsLayout />)
        },
        {
            path: '/faq',
            element: (<FaqLayout />)
        },
        {
            path: '/about-us',
            element: (<AboutUsLayout />)
        },
        {
            path: '/contact-us',
            element: (<ContactUsLayout />)
        },
        
    ]
)