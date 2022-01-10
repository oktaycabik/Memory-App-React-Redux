
import Card from "./Card";

import {useSelector,useDispatch} from "react-redux" 
import { resetCard } from "./redux/memoryGame/memoryGameSlice";



function App() {
  let items = useSelector(state => state.memory.items)
 
  const score = useSelector(state => state.memory.score)
  const dispatch = useDispatch();

 

  return (
    <>
      <h1>Puanınız:{score}</h1>
      <button onClick={()=>dispatch(resetCard())} >Try Again</button>
      <div className="main">
        {items.map((item) => (
          <Card key={item.id}  item={item} />
        ))}
      </div>
    </>
  );
}

export default App;
