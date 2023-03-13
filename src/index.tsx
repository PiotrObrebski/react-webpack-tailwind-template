import { StrictMode } from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import "./index.css"

const container = document.createElement('div');
container.classList.add("root")
document.body.appendChild(container)

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  container
);
