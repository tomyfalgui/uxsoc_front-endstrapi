import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import Article from "./Article"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter, Switch, Route } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/:article" component={Article} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
