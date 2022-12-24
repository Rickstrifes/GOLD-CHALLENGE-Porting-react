import {
    createBrowserRouter,
} from "react-router-dom";
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
        element: [<Hero />, <Ourservices />, <Whyus />, <Testimoni />, <Calltoaction />, <Faqaccordion />],
    },
]);