import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("Akshay");
  const [info, setInfo] = useState([]);
  const empty = () => {
    setInputValue("");
  };

  const url = "https://jsonplaceholder.typicode.com/todos/";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((err) => console.log(err));
    //console.log(info)
  }, []);
  //console.log(info)

  return (
    <div className="App">
      {/* {inputValue}
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={empty}>Delete</button> */}
      <h3>Rendering data using hooks in react</h3>
      <h4>Show in table</h4>
      <br />
      <tr>
        <th class="row-1 row-ID">ID</th>
        <th class="row-2 row-name">Title</th>
      </tr>
      {info.map((data, index) => {
        return (
          // <p key={index}>{data.title} </p>
          <table>
            <tr>
              <td class="row-1 row-ID">{data.id}</td>
              <td class="row-2 row-name">{data.title}</td>
              {/* <td>{data.userId}</td> */}
            </tr>
          </table>
        );
      })}
    </div>
  );
}
