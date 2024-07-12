import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FootballPlayerData } from "./components/data";
import BasketballPlayerCard from "./components/BasketballPlayerCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-white grid grid-cols-1 md:grid-cols-3 ">
        {FootballPlayerData.map((ele) => {
          return (
            <div>
              <BasketballPlayerCard
                image={ele.image}
                name={ele.name}
                position={ele.position}
                stats={ele.stats}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
