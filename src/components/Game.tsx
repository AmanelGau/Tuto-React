import React, { useState } from 'react'
import Board from './Board'

const Game: React.FC = () => {
  const [history, setHistory] = useState<{squares: Array<string>}[]>([{squares: Array(9).fill(null)}]);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [stepNumber, setStepNumber] = useState<number>(0);

  const calculateWinner = (squares: Array<string>) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
  }

  
  const handleClick = (i: number) => {
    const currentHistory = history.slice(0, stepNumber + 1);
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...currentHistory, {
      squares: squares,
    }]);
    setXIsNext(!xIsNext)
    setStepNumber(currentHistory.length)
  }

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }
  
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ?
      'Revenir au tour n°' + move :
      'Revenir au début de la partie';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })

  let status: string;
  if (winner) {
      status = winner + ' a gagné';
  } else {
      status = 'Prochain joueur: ' + (xIsNext ? 'X' : 'O');
  }

  return (
      <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i: number) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game
