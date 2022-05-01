import { Flippable, Photo } from "../types";
import React, { useState } from "react";

import Card from "./Card/Card";

interface GameProps {
    /** enough images to make a square game board of size `n` */
    images: Photo[];
}

const Game: React.FC<GameProps> = ({ images }) => {
    const [cardGrid] = useState<Flippable[][]>(() => {
        const copy1 = images.map((i) => ({ ...i }));
        const copy2 = images.map((i) => ({ ...i }));
        const list = copy1.concat(copy2);
        list.sort(() => {
            const val = Math.random();
            return val - 0.5;
        });

        const n = images.length;
        const board: Flippable[][] = new Array(n).fill(undefined).map((a) => new Array(n).fill(undefined));
        for (let i = 0; i < n; i += 1) {
            for (let j = 0; j < n; j += 1) {
                try {
                    board[i][j] = list[i * n + j];
                } catch (err) {
                    // eslint-disable-next-line no-debugger
                    debugger;
                    console.error((err as Error).message);
                }
            }
        }
        return board;
    });

    return (
        <>
            {cardGrid.map((row, rowIndex) => (
                <div className="row justify-content-between align-items-center my-2" key={rowIndex}>
                    {row.map((col, colIndex) => (
                        <div key={colIndex} className="col">
                            <Card image={col} />
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default Game;
