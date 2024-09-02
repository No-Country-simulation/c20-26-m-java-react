import "./App.css";
import Button from "react-bootstrap/Button";
import MyRoutes from "./routes/myRoutes";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
    return (
        <div>
            <Provider store={store}>
                <MyRoutes />
            </Provider>
        </div>
    );
}

export default App;
