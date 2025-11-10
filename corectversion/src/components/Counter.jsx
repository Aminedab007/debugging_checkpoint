import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  const increment = () => {
    // ✔ FIX: utiliser la forme fonctionnelle (évite stale state)
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    // ✔ FIX: empêcher les valeurs négatives
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="card p-3 text-center">
      <h4>Counter Component</h4>

      {/* ✔ FIX: affichage clair */}
      <p className="fs-3">{count} clicks</p>

      <button className="btn btn-primary me-2" onClick={increment}>
        +
      </button>
      <button className="btn btn-danger" onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default Counter;
