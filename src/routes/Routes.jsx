import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import BlogDetails from "../pages/BlogDetails";
import AllBlogPage from "../pages/AllBlogPage";
import AddBlogs from "../pages/AddBlogs";
import ErrorPage from "../pages/ErrorPage";
import MyPostBlogs from "../pages/MyPostBlogs";
import WishList from "../pages/WishList";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateBlogs from "../pages/UpdateBlogs";
import FeaturedBlogs from "../pages/FeaturedBlogs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Register></Register>
      },
      {
        path: "/allBlogs",
        element: <AllBlogPage></AllBlogPage>
      },
      {
        path: "/my-blogs",
        element: <PrivateRoute>
          <MyPostBlogs></MyPostBlogs>
        </PrivateRoute>
      },
      {
        path: "/addBlogs",
        element: <PrivateRoute>
          <AddBlogs></AddBlogs>
        </PrivateRoute>
      },
      {
        path: "/featured",
        element: <PrivateRoute>
          <FeaturedBlogs></FeaturedBlogs>
        </PrivateRoute>
      },
      {
        path: "/blog/:id",
        element: <PrivateRoute>
          <BlogDetails></BlogDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/blog/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <PrivateRoute>
          <UpdateBlogs></UpdateBlogs>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/blog/${params.id}`)
      },
      {
        path: "/wish",
        element: <PrivateRoute>
          <WishList></WishList>
        </PrivateRoute>
      }


    ],
  },
]);

export default router;