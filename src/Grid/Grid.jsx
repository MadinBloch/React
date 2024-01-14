import { useState } from "react";
import Card from "../Components/Cards/Card";
import "./Grid.css";
import isWinner from "../Helper/CheckWinner";

function Grid({ numberOfCard }) {
  let [board, setBorad] = useState(Array(numberOfCard).fill(""));
  let [turn, setTurn] = useState(true);
  let [winner, setWinner] = useState(null);

  function play(index) {
    if (turn == true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }

    const win = isWinner(board, turn ? "O" : "X");
    if(win){
        setWinner(win);
    }
    setBorad([...board]);
    setTurn(!turn);
  }
  function reset(){
    setTurn(true);
    setWinner(null);
    setBorad(Array(numberOfCard).fill(""));
  }
  return (
    <div className="grid-wrapper">
        {
            winner &&  (
                <>
                <h1 className="turn-highlight">Winner is {winner}</h1>
                <button className="reset" onClick={reset}>Reset Game</button>
                </>
            )
        }
      <h1 className="turn-highlight">Current Turn : {turn ? "O" : "X"}</h1>
      <div className="grid">
        {board.map((el, idx) => (
          <Card key={idx} gameEnd={winner ? true : false} onPlay={play} player={el} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
