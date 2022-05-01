import { useEffect, useState } from "react";

import Game from "../components/Game";
import GameSelector from "../components/GameSelector";
import Layout from "../components/Layout";
import type { NextPage } from "next";
import { Photo } from "../types";
import { getImages } from "../services/imageService";

const Home: NextPage = () => {
    const [gameSize, setGameSize] = useState<number>();
    const [images, setImages] = useState<Photo[]>();

    useEffect(() => {
        if (!gameSize) {
            return;
        }
        (async () => {
            const imageCount = (gameSize * gameSize) / 2;
            setImages(await getImages(imageCount));
        })();
    }, [gameSize]);

    return (
        <Layout>
            {/* <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: 300, height: 300 }} />
                    </div>
                    <div className="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div> */}

            {!gameSize && <GameSelector onSelect={(n) => setGameSize(n)} />}
            {!!gameSize && !images && <p>Initializing Game</p>}
            {!!images && <Game images={images} />}
        </Layout>
    );
};

export default Home;
