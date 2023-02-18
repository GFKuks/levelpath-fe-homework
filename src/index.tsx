
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./styles/main.css";

import { store } from "./store";
import { Layout } from "./layout";
import { BirthdaysPage } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <Layout>
            <BirthdaysPage />
        </Layout>
    </Provider>
);