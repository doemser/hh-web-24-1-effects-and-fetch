import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://example-apis.vercel.app/api/bad-jokes/${count}`
      );
      const data = await response.json();

      setData(data);
    }

    fetchData();
  }, [count]);

  if (!data) {
    return <p>loading..</p>;
  }

  return (
    <>
      <h1>Effects and Fetch</h1>
      <h2>
        {data.joke} - id: {data.id}
      </h2>

      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}
