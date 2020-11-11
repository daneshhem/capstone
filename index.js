import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

function render(st=state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
}

render(state.Home);

const router = new Navigo(window.location.origin);

router
  .on({
    ":page": params => {
      render(state[capitalize(params.page)]);
    },
    "/": () => render(state.Home)
  })
  .resolve();


