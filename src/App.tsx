import { RouterProvider } from "react-router-dom";

import router from "./modules/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
