import { BoardState, Player } from "../types";

export const WINNING_COMBINATIONS = [
    // ROWS
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // COLLUMNS
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // DIAGONALS
    [0, 4, 8],
    [2, 4, 6],
];


export const checkWinner = (board: BoardState): Player | null => {
    for (const combo of WINNING_COMBINATIONS) {
        const [idx1, idx2, idx3] = combo;
        if (board[idx1] && board[idx1] === board[idx2] && board[idx1] === board[idx3]) {
            return board[idx1];
        }
    }
    return null;
}

export const isBoardFull = (board: BoardState): boolean => {
    return !board.includes(null);
}
