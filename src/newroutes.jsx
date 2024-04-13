import Home from "./pages/Home.jsx"
import Error from "./pages/Error.jsx"
import MyFaves from "./pages/MyFaves.jsx"
import ToListen from "./pages/ToListen.jsx"

const routes = [
{
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
},
{
    path: "/favorites",
    element: <MyFaves/>,
    errorElement: <Error/>
},
{
    path: "/tolisten",
    element: <ToListen />,
    errorElement: <Error/>
}

];

export default routes
