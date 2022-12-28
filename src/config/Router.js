import {
    createBrowserRouter
} from "react-router-dom";
import RenderLayout from "./RenderLayout";
import Hero from '../Components/Hero';
import Ourservices from '../Components/Ourservices';
import Whyus from '../Components/Whyus';
import Testimoni from '../Components/Testimoni';
import Calltoaction from '../Components/Calltoaction';
import Faqaccordion from '../Components/Faqaccordion';
import Searchbar from '../Components/Searchbar';
import Heroblank from '../Components/Heroblank';
import Searchbardua from '../Components/Searchbardua';
import Herodua from "../Components/Herodua";
import HasilpencarianApiCard from "../Components/HasilpencarianApiCard";
import HasilpencarianCardCarDetail from "../Components/HasilpencarianCardCarDetail";

// NOTES: each time you want to add new page, add it here

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RenderLayout children={[<Hero />, <Ourservices />, <Whyus />, <Testimoni />, <Calltoaction />, <Faqaccordion />]} />
    },
    {
        path: "/carimobil",
        element: <RenderLayout children={[<Herodua />, <Searchbar />]} />
    },
    {
        path: "/hasilpencarian",
        element: <RenderLayout children={[<Heroblank />, <Searchbardua />, <HasilpencarianApiCard />]} />
    },
    {
        path: "/detailpaketsewa",
        element: <RenderLayout children={[<Heroblank />, <Searchbardua />, <HasilpencarianCardCarDetail />]} />
    },
]);

