import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import router from "modules/router";
import { queryClient } from "configs/query-client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
