import { createBrowserRouter } from "react-router-dom";

import Admin from "./pages/Admin";
import { ADMIN_ROUTE, BASKET_ROUTE, PRODUCT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, DELIVERY_ROUTE, APP_ROUTE, CONTACTS_ROUTE, REVIEW_ROUTE, TOSHAREHOLDERS_ROUTE } from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import ProductPage from "./pages/ProductPage";
import ReviewsPage from "./pages/ReviewsPage";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import App from "./App";
import ToShareholders from "./pages/ToShareholders";
import { Component } from "react";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: TOSHAREHOLDERS_ROUTE,
        Component: ToShareholders
    },
    {
        path: REVIEW_ROUTE,
        Component: ReviewsPage
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: APP_ROUTE,
        Component: App
    },

    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
    {
        path: DELIVERY_ROUTE,
        Component: Delivery
    },
]

export const router = createBrowserRouter([
    ...authRoutes,
    ...publicRoutes,
])


