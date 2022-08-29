import "./styles.css";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="text"
        placeholder="enter the name"
        name="name"
        onChange={handleChange}
      />
      <button> Click here</button>
      <h1>Hiii....{name}</h1>
    </div>
  );
}
