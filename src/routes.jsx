import Home from "./pages/Home";
import NewOrder from "./pages/NewOrder";
import Order from "./pages/Order";

const routes = [
    {
        path: '/',
        component: <Home />
    },
    {
        path: '/order',
        component: <Order />
    },
    {
        path: '/new-order',
        component: <NewOrder />
    },
]

export default routes;