import React,{Component} from 'react'
import styled ,{keyframes}from 'styled-components'

// import Sliderimg from './Sliderimg';

import foryou from '../media/foryou.jpg'
import sports from '../media/sports.jpg'
import tv from '../media/tv.jpg'
import fitness from '../media/fitness.jpg'
import food from '../media/food.jpg'
import travel from '../media/travel.jpg'
import beauty from '../media/beauty.jpg'
import nature from '../media/nature.jpg'
import music from '../media/music.jpg'
import dance from '../media/dance.jpg'
import animals from '../media/animals.jpg'
import auto from '../media/auto.jpg'
import style from '../media/style.jpg'


class Carusel extends Component{
    state ={
        foryou,sports,fitness,tv,
        food,travel,beauty,nature,style,
        music,dance,animals,auto
    }
    render(){
        return(
            <Div className="carousel">
            <Holder className="holder">
                <Hoverdiv>
                    <ImageDiv>
                        <Img src={this.state.foryou} alt=""></Img>
                        <P>For You</P>
                    </ImageDiv>
                </Hoverdiv>
                <Hoverdiv>
                    <ImageDiv>
                    <Img src={this.state.sports} alt=""></Img>
                        <P>Sports</P>
                    </ImageDiv>
                </Hoverdiv>
                <Hoverdiv>
                    <ImageDiv>
                    <Img src={this.state.tv} alt=""></Img>
                        <P>Movies</P>
                    </ImageDiv>
                </Hoverdiv>
                <Hoverdiv>
                    <ImageDiv>
                    <Img src={this.state.fitness} alt=""></Img>
                        <P>Fitness</P>
                    </ImageDiv>
                </Hoverdiv> 
                <Hoverdiv>
                    <ImageDiv>
                    <Img src={this.state.food} alt=""></Img>
                        <P>Food</P>
                    </ImageDiv>
                </Hoverdiv>
                <Hoverdiv>
                    <ImageDiv>
                    <Img src={this.state.music} alt=""></Img>
                        <P>Music</P>
                    </ImageDiv>
                </Hoverdiv>
                <Hoverdiv>
                    <ImageDiv>
                    <Img src={this.state.style} alt=""></Img>
                        <P>Style</P>
                    </ImageDiv>
                </Hoverdiv>
                <Hoverdiv>
                    <ImageDiv>
                    <Img src={this.state.travel} alt=""></Img>
                        <P>Travel</P>
                    </ImageDiv>
                </Hoverdiv>
                <Hoverdiv>
                    <ImageDiv>
                    <Img src={this.state.beauty} alt=""></Img>
                        <P>Beauty</P>
                    </ImageDiv>
                </Hoverdiv>
                <Hoverdiv>
                    <ImageDiv>
                    <Img src={this.state.nature} alt=""></Img>
                        <P>Nature</P>
                    </ImageDiv>
                </Hoverdiv>
                <Hoverdiv>
                    <ImageDiv>
                    <Img src={this.state.dance} alt=""></Img>
                        <P>Dance</P>
                    </ImageDiv>
                </Hoverdiv>
                <Hoverdiv>
                    <ImageDiv>
                    <Img src={this.state.animals} alt=""></Img>
                        <P>Animals</P>
                    </ImageDiv>
                </Hoverdiv>
                <Hoverdiv>
                    <ImageDiv>
                    <Img src={this.state.auto} alt=""></Img>
                        <P>Auto</P>
                    </ImageDiv>
                </Hoverdiv>
            </Holder>
          </Div>
        )
    }
}
export default Carusel
  
const Div = styled.div `
    margin:0.25em 0 0.4em 0;
    display:flex;
    align-items:center;
    width: 100%;
    height: 6em;
    overflow: hidden;
    box-sizing: border-box;
    /* margin: 0 auto; */
    /* border:0.1em solid red; */
    @media (min-width: 26em) {
       width:30em;
    }    
    @media (min-width: 30em) {
       width:33em;
    } 
    @media (min-width: 34em) {
        width:36em;
    }
    @media (min-width: 38em) {
        width:39em;
    }
    @media (min-width: 42em) {
        width:42em;
    }
    @media (min-width: 46em) {
        width:45em;
    }
    @media (min-width: 50em) {
        width:48em;
    }
    @media (min-width: 54em) {
        width:51em;
    }
    @media (min-width: 58em) {
        width:54em;
    }
    @media (min-width: 64em) {
        width:60em;
    }
    @media (min-width: 72em) {
        width:60em;
    }
`
const carousel = keyframes`
0% {
  transform: translateX(0);
}
50%{
  transform: translateX(-38%);
}
100% {
    transform: translateX(0);
}
`
  const Holder =styled.div`
    display:flex;
    align-items:center;
      white-space: nowrap;
      will-change: contents;
      animation-play-state: paused;
      &:hover {
        animation: ${carousel} 15s linear infinite;
  }
 
`
const ImageDiv = styled.div`
    margin-top:0.4em;
    display:flex;
    flex-direction:column;
`

const P = styled.p`
    margin-top:-2em;
    margin-left:2.5em;
    color: #fff;
    font-weight:500;
    font-size:0.9em;
    padding-bottom:0.25em;
    /* border-bottom:0.15em solid #fff; */
    width:3.5em;
    /* border-bottom:0.15em solid #fff; */
   
    /* &:after{
    /* content:''; */
    /* position:absolute;
    left:0;right:0;
    top:100%;
    margin: 10px auto;
    width:50%;
    height:6px;
    background:#fff;
    }  */
`
const Hoverdiv = styled.div`
     &:hover ${P}{
        border-bottom:0.15em solid #fff;
    }
  `
const Img = styled.img` 
    display: inline-block;
    width: 7em;
    height: 4.8em;
    border-radius:.4em;
    box-shadow: 0 0 0.2em #000;
    margin: 0 0.2em;
`