import { useState } from "react";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";

function App() {

  const [username, setUsername] = useState();

  return (
    <div className="container my-5">

      <h1 className="text-center">React Debugging Checkpoint</h1>

      {/* BUG 1 : Username is undefined */}
      <UserCard name={username} />

      <div className="mt-4">
        <Counter />
      </div>

    </div>
  );
}

export default App;
