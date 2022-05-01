import React, { useState } from "react";

interface GameSelectorProps {
    onSelect: (n: number) => void;
}

const options = [2, 4, 6];

const GameSelector: React.FC<GameSelectorProps> = ({ onSelect }) => {
    const [n, setN] = useState<number>();
    const handleSelect = (n: number) => {
        setN(n);
        onSelect(n);
    };
    return (
        <>
            <form>
                <div>
                    <label>Choose a board size</label>
                    <select value={n} onChange={(e) => handleSelect(+e.target.value)}>
                        <option value="">Select a game size</option>
                        {options.map((o) => (
                            <option key={o} value={o}>
                                {o}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </>
    );
};

export default GameSelector;
