import React, { useEffect, useState } from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(0);

  console.log("Component rendered");

  useEffect(
    function () {
      console.log("Effect function ran");
      // fetch("https://swapi.dev/api/people/1")
      //   .then((response) => response.json())
      // .then((data) => setStarWarsData(data));
    },
    [count]
  );

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
    </div>
  );
}
