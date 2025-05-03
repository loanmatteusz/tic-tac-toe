import { useState } from "react";
import { Gamepad2, RotateCcw } from "lucide-react";
import { BoardState, Player } from "./types";
import Board from "./components/Board";
import { checkWinner, isBoardFull } from "./helpers/game-logic";

function App() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  
  const winner = checkWinner(board);
  const isDraw = !winner && isBoardFull(board);
  const currentPlayer: Player = board.filter(Boolean).length % 2 === 0 ? "X" : "O";

  const handleClick = (index: number) => {
    if (board[index] || winner) return;
    setBoard(board.map((square, idx) => (index === idx ? currentPlayer : square)));
  }
  
  const handleRestart = () => {
    setBoard(Array(9).fill(null));
  }

  const getGameStatus = () => {
    if (winner) return `Player ${winner} won!`;
    if (isDraw) return `It's a Draw!`;
    return `Player ${currentPlayer}'s turn`;
  }

  return (
    <main className="bg-blue-200 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-lg bg-blue-100 p-8 rounded-2xl">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Gamepad2 className="w-8 h-8 text-pink" />
          <h1 className="text-white text-4xl font-bold">Tic Tac Toe</h1>
        </div>

        <div className="mb-6 text-center">
          <p className="text-xl font-semibold text-gray-100">{getGameStatus()}</p>
        </div>

        <Board board={board} winner={winner} onClick={handleClick} />

        {(winner || isDraw) && (
          <div className="mt-8 flex justify-center">
            <button className="group flex items-center gap-2 bg-pink rounded-lg px-6 py-3 text-sm text-white hover:opacity-90"
              onClick={handleRestart}
            >
              Restart Game
              <RotateCcw className="transition-transform duration-500 group-hover:-rotate-180" />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
