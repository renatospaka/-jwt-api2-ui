import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <main className="form-signin">
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
