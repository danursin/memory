import React, { useState } from "react";

import { Flippable } from "../../types";
import Image from "next/image";
import question from "../../img/question.png";

interface CardProps {
    image: Flippable;
}

const Card: React.FC<CardProps> = ({ image }) => {
    const [flipped, setFlipped] = useState<boolean>(true);
    return (
        <div className={`flip-card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
            <div className="flip-card-inner">
                <div className="flip-card-back">
                    <Image className="card-img-top" src={question} width="100%" height="100%" alt="Question" />
                </div>
                <div className="flip-card-front">
                    <Image className="card-img-top" src={image.urls.thumb} width="100%" height="100%" alt="Question" />
                </div>
            </div>
        </div>
    );
};

export default Card;
