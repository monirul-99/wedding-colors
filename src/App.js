import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router-dom";
import { Routers } from "./Routers/Routes/Routes";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className="font-Poppins bg-gray-800 container mx-auto">
      <RouterProvider router={Routers}></RouterProvider>
    </div>
  );
}

export default App;
