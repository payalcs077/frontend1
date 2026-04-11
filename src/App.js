import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const callAPI = async () => {
    try {
      const res = await fetch("https://backendrepo-one.vercel.app/api");
      const json = await res.json();
      setData(json.message);
    } catch (err) {
      console.error(err);
      setData("Error fetching data");
    }
  };

  return (
    <div>
      <h1>Full Stack App 🚀</h1>
      <button onClick={callAPI}>Call Backend</button>
      <p>{data}</p>
    </div>
  );
}

export default App;
