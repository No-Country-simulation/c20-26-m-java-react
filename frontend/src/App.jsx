import "./App.css";
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
