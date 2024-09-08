<<<<<<< HEAD
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  

  return (
    <div className>

        <Button>Hola mundo</Button>
          
    </div>
  );
=======
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
>>>>>>> e7231138e17794d0928b033c11def6dcdf848563
}

export default App;
