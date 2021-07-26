import { useEffect, useState } from "react";


const Home = () => {
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
        setName(data.name)
      }
    )()
  });

  return (
    <div>
      {name ? "Hi " + name : "you are not logged in "}
    </div>
  );
}

export default Home;
