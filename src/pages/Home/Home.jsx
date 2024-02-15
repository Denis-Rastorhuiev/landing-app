import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className={"home"}>
            <h1 className={"home-heading"}>The Elder Scrolls Online</h1>
            <div className={"home-content"}>
                <div className={"home-text"}>
                    <h2><b>"The Elder Scrolls Online"</b> is a massively multiplayer online game in the MMORPG genre,
                        developed by ZeniMax Online Studios.
                        It is a part of the popular series of games "The Elder Scrolls" created by
                        by Bethesda Game Studios. The game immerses players in the vast open world of Tamriel,
                        where they can explore different areas, complete quests, fight monsters and other players, and develop
                        other players, and develop their character.
                    </h2>
                    <p>"The Elder Scrolls Online" offers a variety of gameplay,
                        a rich history and the ability to play both alone and in co-op with friends.</p>
                </div>
                <iframe className={"home-video"} width="560" height="315" src="https://www.youtube.com/embed/zt-ZIb2dKIw?si=7iqeMNmf1wGrKH-R"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>

        </div>
    );
};

export default Home;