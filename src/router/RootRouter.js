import Home from "../pages/Home";
import Alcohol from "../pages/alcohol/Alcohol";
import DefaultLayout from "../layout/Default";
import Recipe from "../pages/Recipe";

export const routers = [
    {
        exact : true,
        path : '/',
        component : Home,
        layout: DefaultLayout,
        name : 'Main'
    },
    {
        exact : false,
        path : '/beverage',
        component : Alcohol,
        layout: DefaultLayout,
        name : 'Beverage'
    },
    {
        exact : false,
        path : '/recipe',
        component : Recipe,
        layout: DefaultLayout,
        name : 'Recipe'
    }
]
