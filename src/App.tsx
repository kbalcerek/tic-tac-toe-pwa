import React, { useState } from 'react';
import './App.css';

const initialCleanBoard: string[] = ['', '', '', '', '', '', '', '', ''];

function App() {
  const [board, setBoard] = useState<string[]>([...initialCleanBoard]);
  const [player, setPlayer] = useState('O'); // TODO: Change 'O' and 'X' to constants
  const [winner, setWinner] = useState('');

  const checkWinner = () => {
    ['X' , 'O'].forEach((item) => {
      // TODO: refactor
      if (board[0] === item && board[1] === item && board[2] === item){
        setWinner(item);
        return;
      }
      if (board[3] === item && board[4] === item && board[5] === item){
        setWinner(item);
        return;
      }
      if (board[0] === item && board[1] === item && board[2] === item){
        setWinner(item);
        return;
      }
    })
  }


  const startGame = () => {
    setBoard([...initialCleanBoard]);
  }

  const cellClick = (index: number) => () => {
    board[index] = player;
    setPlayer(player === "O" ? 'X' : 'O')
    setBoard(board);
    checkWinner();
  }

  return (
    <div className="App">
      <div className="board">
        {board.map((c, index) => (
          <div
            id={`cell${index}`}
            className="cell"
            onClick={cellClick(index)}
          >{board[index]}</div>
        ))}
      </div>

      {winner !== '' && (<p id="message">Winner is {winner}</p>)}
      
      <button id="restartGame" onClick={startGame}>Restart Game</button>
    </div>
  );
}

export default App;
