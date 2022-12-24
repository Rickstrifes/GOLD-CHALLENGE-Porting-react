import {
    createBrowserRouter,
} from "react-router-dom";
import RenderLayout from "./RenderLayout";
import Hero from '../Components/Hero';
import Ourservices from '../Components/Ourservices';
import Whyus from '../Components/Whyus';
import Testimoni from '../Components/Testimoni';
import Calltoaction from '../Components/Calltoaction';
import Faqaccordion from '../Components/Faqaccordion';

// NOTES: each time you want to add new page, add it here

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RenderLayout children={<Hero />} />
    },
    {
        path: "/services",
        element: <RenderLayout children={<Ourservices />}/>
    },
    {
        path: "/whyus",
        element: <RenderLayout children={<Whyus />} />
    },
    {
        path: "/testi",
        element: <RenderLayout children={<Testimoni />} />
    },
    {
        path: "/",
        element: <RenderLayout children={<Calltoaction />} />
    },
    {
        path: "/faq",
        element: <RenderLayout children={<Faqaccordion />} />
    },
]);

