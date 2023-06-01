import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import ContentComponent from "./ContentComponent";

function CricketComponent() {
    const [totalScore, setTotalScore] = useState(0);

    const [balls, setBalls] = useState(0);
    const [overs,setOvers] = useState(0);

    const [fours,setFours] = useState(0);
    const [sixes,setSixes] = useState(0);

    const [wides, setWide] = useState(0);
    const [noBalls,setNoBall] = useState(0);
    const [dots, setDots] = useState(0);

    const [wickets, setWicket] = useState(0);

    const [playerA,setPlayerA] = useState(1);
    const [playerAScore,setPlayerAScore] = useState(0);
    const [playerABall,setPlayerABall] = useState(0);

    const [playerB,setPlayerB] = useState(2);
    const [playerBScore,setPlayerBScore] = useState(0);
    const [playerBBall,setPlayerBBall] = useState(0);

    const [playersPlayed,setPlayersPlayed] = useState(3);
    const [playerAChance,setPlayerAChance] = useState(true);

    function setScore(score) {
        setTotalScore(totalScore + score);
        if(playerAChance){
            setPlayerAScore(playerAScore+score);
        }else{
            setPlayerBScore(playerBScore+score);
        }
    }

    function updateBall(){
        setBalls(balls+1);
        if(balls>=5){
            setBalls(0);
            setOvers(overs+1);
        }
        if(playerAChance){
            setPlayerABall(playerABall+1);
        }else{
            setPlayerBBall(playerBBall+1);
        }
    }

    function dot(){
        updateBall();
        setDots(dots+1);
    }

    function six() {
        updateBall();
        setScore(6);
        setSixes(sixes+1);
    }

    function four() {
        updateBall();
        setScore(4);
        setFours(fours+1);
    }

    function single() {
        setPlayerAChance(!playerAChance);
        updateBall();
        setScore(1);
    }

    function noBall() {
        setScore(1);
        setNoBall(noBalls+1);
    }

    function wide() {
        setScore(1);
        setWide(wides+1);
    }

    function wicket() {
        updateBall();

        setPlayersPlayed(playersPlayed+1);

        if(playerAChance){
            setPlayerA(playersPlayed);
            setPlayerABall(0);
            setPlayerAScore(0);
        }else{
            setPlayerB(playersPlayed);
            setPlayerBBall(0);
            setPlayerBScore(0);
        }

        setWicket(wickets+1);  
    }

    return (
        <React.Fragment>
            <div className="cricket">
                <div className="options">
                    <div className="container">
                        <ButtonComponent name="Six" OnClickEvent={six} />
                        <ButtonComponent name="Four" OnClickEvent={four} />
                        <ButtonComponent name="Single" OnClickEvent={single} />
                        
                    </div>
                    <div className="container">
                        <ButtonComponent name="No Ball" OnClickEvent={noBall} />
                        <ButtonComponent name="Dot" OnClickEvent={dot} />
                        <ButtonComponent name="Wide" OnClickEvent={wide} />
                    </div>
                    <div className="container">
                        <ButtonComponent name="Wicket" OnClickEvent={wicket} />
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <ContentComponent name="Over" content={`${overs} - ${balls}`} />
                        <ContentComponent name={playerAChance ? `Player ${playerA}°` : `Player ${playerA}`} content={`${playerAScore} - ${playerABall}`} />
                        <ContentComponent name={!playerAChance ? `Player ${playerB}°` : `Player ${playerB}`} content={`${playerBScore} - ${playerBBall}`}  />
                    </div>
                    <div className="container">
                        <ContentComponent name="Total Score" content={totalScore} />
                        <ContentComponent name="Wickets" content={wickets} />
                    </div>
                    <div className="container">
                        <ContentComponent name="No Ball" content={noBalls} />
                        <ContentComponent name="Wide" content={wides} />
                        <ContentComponent name="Fours" content={fours} />
                        <ContentComponent name="Sixes" content={sixes} />
                        <ContentComponent name="Dot" content={dots} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CricketComponent;
