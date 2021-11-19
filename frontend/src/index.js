import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import SimpleReactLightbox from "simple-react-lightbox";

ReactDOM.render(
  <App >
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </App>,
  document.getElementById("root")
);
