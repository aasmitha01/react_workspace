import React from "react";

function HeavyComponent() {
  console.log("HeavyComponent rendered");

  // simulate heavy UI
  let sum = 0;
  for (let i = 0; i < 1e7; i++) {
    sum += i;
  }

  return (
    <div style={{ border: "2px solid gray", padding: "20px", marginTop: "20px" }}>
      <h3>Heavy Component</h3>
      <p>This is a heavy UI section</p>
    </div>
  );
}

export default React.memo(HeavyComponent);
