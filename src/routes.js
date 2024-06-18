import { createBrowserRouter } from "react-router-dom";

import Admin from "./pages/Admin";
import { ADMIN_ROUTE, BASKET_ROUTE, PRODUCT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, DELIVERY_ROUTE, APP_ROUTE, CONTACTS_ROUTE, REVIEW_ROUTE, TOSHAREHOLDERS_ROUTE, RESET_PASSWORD_ROUTE, FORGOT_PASSWORD_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import ProductPage from "./pages/ProductPage";
import ReviewsPage from "./pages/ReviewsPage";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import App from "./App";
import ToShareholders from "./pages/ToShareholders";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin />
    },
    {
        path: BASKET_ROUTE,
        element: <Basket />
    },
];

export const publicRoutes = [
    {
        path: APP_ROUTE,
        element: <App />
    },
    {
        path: SHOP_ROUTE,
        element: <Shop />
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth />
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        element: <ProductPage />
    },
    {
        path: DELIVERY_ROUTE,
        element: <Delivery />
    },
    {
        path: CONTACTS_ROUTE,
        element: <Contacts />
    },
    {
        path: REVIEW_ROUTE,
        element: <ReviewsPage />
    },
    {
        path: TOSHAREHOLDERS_ROUTE,
        element: <ToShareholders />
    },
    {
        path: FORGOT_PASSWORD_ROUTE,
        element: <ForgotPassword />
    },
    {
        path: RESET_PASSWORD_ROUTE,
        element: <ResetPassword />
    },
];


export const router = createBrowserRouter([
    ...authRoutes,
    ...publicRoutes,
])


