import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    (
      async () => {
        const resp = await fetch("http://localhost:8000/api/user", {
          method: "GET",
          credentials: "include",   //get the authentication cookie and use
          headers: {"Content-Type": "application/json"},
        });

        const data = await resp.json();
        setName(data.name);
      }
    )()
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName}/>

        <main className="form-signin">
          <Route path="/" exact component={() => <Home name={name}/>} />
          <Route path="/login" component={() => <Login setName={setName}/>} />
          <Route path="/Register" component={Register} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
