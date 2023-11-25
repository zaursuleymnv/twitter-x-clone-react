import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Communities from "~/pages/communities";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import Lists from "~/pages/lists";
import Messages from "~/pages/messages";
import NotFound from "~/pages/not-found";
import Notifications from "~/pages/notifications";
import Profile from "~/pages/profile";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'explore',
                element: <Explore/>
            },
            {
                path: 'notifications',
                element: <Notifications/>
            },
            {
                path: 'messages',
                element: <Messages/>
            },
            {
                path: 'lists',
                element: <Lists/>
            },
            {
                path: 'communities',
                element: <Communities/>
            },
            {
                path: ':slug',
                element: <Profile/>

            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    },
])

export default routes