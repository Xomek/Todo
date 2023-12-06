import { createRoot } from "react-dom/client";

// store
import { Provider } from "react-redux";
import { store } from "./redux/store";

// react-router-dom
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

// styles
import "./scss/index.scss";

const container = document.getElementById("root")!;
const root = createRoot(container);

const app = (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

root.render(app);
