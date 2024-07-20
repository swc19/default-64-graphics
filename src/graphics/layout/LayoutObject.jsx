import React, {useCallback} from 'react';
import { ReactFitty } from "react-fitty";
import ssb64_images from '../assets/icons/ssb64/*.png'
import { useReplicant } from '../utils/hooks';
import styled from 'styled-components';
const NODECG_BUNDLE = 'nodecg-smashcontrol-react';


export const LayoutObject = () => {
    const [setInfo] = useReplicant('setInfo', {}, {namespace: NODECG_BUNDLE});
    const [portsVisible, setPortsVisible] = useReplicant('portsVisible', true, {namespace: NODECG_BUNDLE});
    const [characterVisible, setCharacterVisible] = useReplicant('characterVisible', true, {namespace: NODECG_BUNDLE});
    const [primaryColor, setPrimaryColor] = useReplicant('primaryColor', '#000000', {namespace: NODECG_BUNDLE});
    const [secondaryColor, setSecondaryColor] = useReplicant('secondaryColor', '#000000', {namespace: NODECG_BUNDLE});
    const [backgroundColor, setBackgroundColor] = useReplicant('backgroundColor', '#000000', {namespace: NODECG_BUNDLE});

    const handleGetImage = useCallback((character) => {
        if(character){return ssb64_images[character.split("[REMIX] ").at(-1)];}
    })

    return(
        <Layout color={primaryColor}>
            <TopbarInfo color={primaryColor}>
                <TournamentInfo>
                    <BracketLocation><ReactFitty maxSize={48}>{setInfo.bracketlocation}</ReactFitty></BracketLocation>
                </TournamentInfo>
            </TopbarInfo>
            <CameraBox color={primaryColor}></CameraBox>
            <GameBox color={primaryColor}></GameBox>
            <SidebarInfo color={backgroundColor}>
                {portsVisible ? 
                <Player1Ports>
                    <Port filled={Number(setInfo.player1port) === 1} portnum={1}></Port>
                    <Port filled={Number(setInfo.player1port) === 2} portnum={2}></Port>
                    <Port filled={Number(setInfo.player1port) === 3} portnum={3}></Port>
                    <Port filled={Number(setInfo.player1port) === 4} portnum={4}></Port>
                </Player1Ports>
                : null }
                <Player1Info>
                    <Player1Character src={characterVisible ? handleGetImage(setInfo.player1character) : handleGetImage("Blank")}></Player1Character>
                    <Player1Name color={primaryColor}><ReactFitty maxSize={48}>{setInfo.player1tag}</ReactFitty></Player1Name>
                    <ScoreWrapper color={secondaryColor}>
                        <Player1Score><ReactFitty maxSize={48}>{setInfo.player1score}</ReactFitty></Player1Score>
                    </ScoreWrapper>
                </Player1Info>
                {portsVisible ? 
                <Player2Ports>
                    <Port filled={Number(setInfo.player2port) === 1} portnum={1}></Port>
                    <Port filled={Number(setInfo.player2port) === 2} portnum={2}></Port>
                    <Port filled={Number(setInfo.player2port) === 3} portnum={3}></Port>
                    <Port filled={Number(setInfo.player2port) === 4} portnum={4}></Port>
                </Player2Ports>
                : null }
                <Player2Info>
                    <Player2Character src={characterVisible ? handleGetImage(setInfo.player2character) : handleGetImage("Blank")}></Player2Character>
                    <Player2Name color={primaryColor}><ReactFitty maxSize={48}>{setInfo.player2tag}</ReactFitty></Player2Name>
                    <ScoreWrapper color={secondaryColor}>
                        <Player2Score><ReactFitty maxSize={48}>{setInfo.player2score}</ReactFitty></Player2Score>
                    </ScoreWrapper>
                </Player2Info>
            </SidebarInfo>
        </Layout>
    )
    
}

const Layout = styled.div`
    position: absolute;
    font-family: Roboto;
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100%;
    border: 20px solid ${props => props.color};
    * {
        box-sizing: border-box;
    }
`
const TopbarInfo = styled.div`
    position: absolute;
    width: 550px;
    height: 70px;
    left: 930px;
    background: ${props => props.color};
`
const TournamentInfo = styled.div`
    color: white;
    text-align: center;
    line-height: 72px;
`
const CameraBox = styled.div`
    width: 440px;
    height: 330px;
    outline: 20px solid ${props => props.color};
`
const GameBox = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 1420px;
    height: 1040px;
    outline: 20px solid ${props => props.color};
`
const BracketLocation = styled.div`
`

const SidebarInfo = styled.div`
    top: 350px;
    height: 710px;
    width: 440px;
    background: ${props => props.color};
`

const Player1Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    text-align: center;
    color: white;
    width: 365px;
    height: 70px;
    left: 20px;
    top: 495px;
`

const ScoreWrapper = styled.div`
    background: ${props => props.color};
`

const Player1Name = styled.div`
    position: relative;
    width: 250px;
    height: 70px;
    background: ${props => props.color};
    padding-top: 5px;
    margin: auto;
`

const Player1Character = styled.img`
    position: relative;
    height: 40px;
    width: 32px;
    left: 0px;
    top: 0px;
    margin: auto;
`

const Player1Score = styled.div`
    position: relative;
    left: 5px;
    width: 45px;
    padding-top: 5px;
    font-size: 48px;
`

const Player2Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    text-align: center;
    color: white;
    width: 365px;
    height: 70px;
    left: 20px;
    top: 615px;
`

const Player2Name = styled.div`
    position: relative;
    width: 250px;
    height: 70px;
    background: ${props => props.color};
    padding-top: 5px;
    margin: auto;
`

const Player2Character = styled.img`
    position: relative;
    height: 40px;
    width: 32px;
    left: 0px;
    top: 0px;
    margin: auto;
`

const Player2Score = styled.div`
    position: relative;
    left: 5px;
    width: 45px;
    padding-top: 5px;
    font-size: 48px;
`





const Player1Ports = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    position: absolute;
    top: 475px;
    left: 80px;
    width: 100px;

`
const Player2Ports = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    position: absolute;
    top: 595px;
    left: 80px;
    width: 100px;
`
const Port = styled.div`
    outline: 3px solid black;
    width: 15px;
    height: 15px;
    border-radius: 25px;
    background: ${props => {
        if(props.filled){
            switch(props.portnum){
                case 1:
                    return `#ed3636`;
                case 2:
                    return `blue`;
                case 3:
                    return `#ffdf1a`;
                case 4:
                    return `#4eb94e`;
            }   
        }
    }}
`