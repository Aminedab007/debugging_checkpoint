import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  const increment = () => {
    // BUG 4 : wrong state update (stale value possible)
    setCount(count + 1);
  };

  const decrement = () => {
    // BUG 5 : goes below zero
    setCount(count - 1);
  };

  return (
    <div className="card p-3 text-center">
      <h4>Counter Component</h4>

      {/* BUG 6 : Display wrong value */}
      <p className="fs-3">{count} clicks registered</p>

      <button className="btn btn-primary me-2" onClick={increment}>+</button>
      <button className="btn btn-danger" onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
