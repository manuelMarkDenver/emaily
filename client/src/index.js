import 'materialize-css/dist/css/materialize.min.css'
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { store } from './store'

import App from "./components/App";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
