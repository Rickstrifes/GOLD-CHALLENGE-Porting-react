import { createBrowserRouter } from "react-router-dom";
import RenderLayout from "./RenderLayout";
import HomePage from "../Pages/HomePage";
import Searchbar from "../Components/Searchbar";
import Heroblank from "../Components/Heroblank";
import Searchbardua from "../Components/Searchbardua";
import Herodua from "../Components/Herodua";
// import HasilpencarianApiCard from "../Components/HasilpencarianApiCard";
// import HasilpencarianCardCarDetail from "../Components/HasilpencarianCardCarDetail";
import Cars from "../Pages/Cars";
import DetailCars from "../Pages/DetailCars";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import FindCar from "../Pages/FindCar";


// NOTES: each time you want to add new page, add it here

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RenderLayout children={[<HomePage /> ]} />,
  },
  ,
  {
    path: "/sek",
    element: <RenderLayout children={[<FindCar />]} />,
  },
  {
    path: "/carimobil",
    element: <RenderLayout children={[<Herodua />, <Searchbar />]} />,
  },
  {
    path: "/hasilpencarian",
    element: <RenderLayout children={[<Heroblank />, <Searchbardua />, <Cars />]} />,
  },
  {
    path: "/detailpaketsewa",
    element: <RenderLayout children={[<Heroblank />, <Searchbardua />, <DetailCars />]} />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
