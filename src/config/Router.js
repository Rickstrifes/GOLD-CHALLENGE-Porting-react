import { createBrowserRouter } from "react-router-dom";
import RenderLayout from "./RenderLayout";
import Hero from "../Components/Hero";
import Ourservices from "../Components/Ourservices";
import Whyus from "../Components/Whyus";
import Testimoni from "../Components/Testimoni";
import Calltoaction from "../Components/Calltoaction";
import Faqaccordion from "../Components/Faqaccordion";
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
import Invoice from "../Components/Invoice";
import Ticket from "../Components/Tiket";
import PaymentDesk from "../Components/PaymentDesk";
import PembayaranBank from "../Components/PembayaranBank";
import Filter from "../Components/Filter";
import KonfirmasiUpload from "../Components/KonfirmasiUpload";
import HasilpencarianCardCarDetail from "../Components/HasilpencarianCardCarDetail";

// NOTES: each time you want to add new page, add it here

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RenderLayout children={[<Hero />, <Ourservices />, <Whyus />, <Testimoni />, <Calltoaction />, <Faqaccordion />]} />,
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
  {
    path: "/invoice",
    element: <Invoice />,
  },
  {
    path: "/tiket",
    element: <Ticket />,
  },
  {
    path: "/PaymentDesk",
    element: <PaymentDesk />,
  },
  {
    path: "/PembayaranBank",
    element: <PembayaranBank />,
  },
  {
    path: "/Filter",
    element: <Filter />,
  },
  {
    path: "/KonfirmasiUpload",
    element: <KonfirmasiUpload />,
  },
  {
    path: "/hasilpencarian",
    element: <HasilpencarianCardCarDetail />,
  },
]);
