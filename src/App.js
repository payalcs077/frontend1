import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const callAPI = async () => {
    try {
      const res = await fetch("https://mycuteapp.duckdns.org/api")
      const json = await res.json();
      setData(json.message);
    } catch (err) {
      console.error(err);
      setData("Error fetching data");
    }
  };

  return (
    <div>
      <h1>Hello Cutie 👾</h1>
      <button color="hotpink" onClick={callAPI}>Meow me</button>
      <p>{data}</p>
    </div>
  );
}

export default App;
