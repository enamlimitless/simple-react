import './App.css';
import Player from './Components/Players/Player';
import { useEffect, useState } from 'react';
import dataJson  from "./Data/data.json";
import Count from './Components/Count/Count';

function App() {
  const [data, setData]= useState([]);
  const [count, setCount] = useState([]);
  const [salary, setSalary] = useState([]);

  useEffect(() => {
    setData(dataJson);
    // console.log(dataJson);
  },[]);
console.log("This is data",data)

  const handleAddPlayer = (player) =>{
    // console.log(player.name,player.salary);
    const newCount = [...count, player.name];
    setCount(newCount);

    const newSalary = [...salary, player.salary];
    setSalary(newSalary);

  }


  return (
    <div className="wrapper">
      <Count count={count} data={data}></Count>
          {
            dataJson.map(player => <Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
          }
          
    </div>
  );
}

export default App;
