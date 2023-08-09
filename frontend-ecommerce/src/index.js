import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { login } from "./redux/authActions";
// Kiểm tra trạng thái đăng nhập từ Local Storage
const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn === "true") {
  // Khôi phục trạng thái đăng nhập trong Redux store
  store.dispatch(login({ user: "user" }));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
