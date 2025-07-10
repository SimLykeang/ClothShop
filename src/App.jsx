import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import ContactUs from "./pages/ContactUs";
import ManCloth from "./pages/ManCloth";
import WomanCloth from "./pages/WomanCloth";
import KidCloth from "./pages/KidCloth";
import AboutUs from "./pages/AboutUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "manCloth",
        element: <ManCloth />,
      },
      {
        path: "womanCloth",
        element: <WomanCloth />,
      },
      {
        path: "kidCloth",
        element: <KidCloth />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
