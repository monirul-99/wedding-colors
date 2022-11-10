import { RouterProvider } from "react-router-dom";
import { Routers } from "./Routers/Routes/Routes";

function App() {
  return (
    <div className="font-Poppins bg-gray-800 container mx-auto">
      <RouterProvider router={Routers}></RouterProvider>
    </div>
  );
}

export default App;
