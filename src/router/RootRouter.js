import Home from "../pages/main/Home";
import Sub from "../pages/main/Sub";
import DefaultLayout from "../layout/Default";

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
        path : '/sub',
        component : Sub,
        layout: DefaultLayout,
        name : 'Sub'
    }
]
