import React from "react"
import { Switch, Route } from "react-router-dom"
import ButtonRouting from './component/ButtonRouting'
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/"><Page1 /></Route>
        <Route path="/2"><Page2 /></Route>
      </Switch>
      <ButtonRouting />
      <div className="footer"></div>
    </div>
  )
}

export default App
