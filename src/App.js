import { RouterProvider } from "react-router-dom";
import { router } from "./config/Router";

// NOTES: you can declare the router contants here as the comment below
// or seperate it to other folder (or file) as this example for readibility-wise only
//===============================================================
// import RenderLayout from "./RenderLayout";
// import SectionHome from '../components/SectionHome'
// import SectionTestimoni from "../components/SectionTestimoni";
// import SectionDetail from '../components/SectionDetail'
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RenderLayout children={<SectionHome />} />,
//   },
//   {
//     path: "/testimoni",
//     element: <SectionTestimoni children={<SectionTestimoni />} />,
//   },
//   {
//     path: "/detail",
//     element: <RenderLayout children={<SectionDetail />} />,
//   },
// ]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
