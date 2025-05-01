import { Player } from "../types";

export const getSquareTextColor = (value: Player | null) => (
    value === "X" ? "text-pink" : "text-white"
);
