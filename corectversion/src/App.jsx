import { useState } from "react";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";

function App() {
  // ✔ FIX: initialiser avec une valeur par défaut
  const [username, setUsername] = useState("Amine");

  return (
    <div className="container my-5">

      <h1 className="text-center mb-4">React Debugging Checkpoint</h1>

      {/* ✔ FIX: name est maintenant toujours défini */}
      <UserCard name={username} />

      <div className="mt-4">
        <Counter />
      </div>

    </div>
  );
}

export default App;
