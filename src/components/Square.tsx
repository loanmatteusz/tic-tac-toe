import { motion } from "motion/react";
import { Player } from "../types";
import { getSquareTextColor } from "../helpers/get-square-text-color";
import { getSquareBorderColor } from "../helpers/get-square-border-color";

type SquareProps = {
    value: Player | null;
    isWinner: boolean;
    onClick: () => void;
};

function Square({ value, isWinner, onClick }: SquareProps) {
    return (
        <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-32 h-32 border-4 rounded-xl text-4xl font-bold ${getSquareBorderColor(value, isWinner)} ${getSquareTextColor(value)}`}
            onClick={onClick}
        >
            {
                value &&
                <motion.span className="block" initial={{ scale: 0, rotate: 180 }} animate={{ scale: 1, rotate: 0 }}>
                    {value}
                </motion.span>
            }
        </motion.button>
    );
}

export default Square;
