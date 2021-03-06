import React,{Component} from 'react';
import styled from 'styled-components';
import { Link,withRouter } from 'react-router-dom';

import oneil from '../media/oneil.jpg'
import guetta from '../media/guetta.jpg'
import tom from '../media/tom.jpg'
import scott from '../media/scott.jpg'
import garrix from '../media/garrix.jpg'
import Watchone from './WatchOne';



class Watchall extends Component{
    close=(e)=>{
        // const story = document.querySelector('.container');
        // story.style.display='none';
        this.props.history.push("/homepage");        
    }
    updating(){
        const pic = document.querySelector('.story');
        const images = [
            guetta,tom,scott,garrix,oneil
          
        ];
        pic.style.backgroundImage = "url("+ images[0]+")";
        
             let i = 0;
             setInterval(function(){
                 pic.style.backgroundImage = "url("+ images[i]+")";
                 i = i + 1;
      if (i === images.length) {
        i =  0;
      }
             }, 4500)
         
    } 
    componentDidMount(){
        this.updating();
    }
    render(){
        return(
            <Container className="container">
                <Link to="/homepage"><Span onClick={this.close}>&times;</Span></Link>
                <BoxImage className="story">
                </BoxImage>
                 <Watchone />
            </Container>
        )
    }
}
export default withRouter(Watchall);

const Container = styled.div`
    width:209.8vh;
    height:100vh;
    background:#323232;
    display:flex;
    align-items:center;
    justify-content:center;
`
const BoxImage = styled.div`
    margin-top:3em;
    width:18em;
    height:32em;
    /* border:gray solid 0.1em; */
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
    /* box-shadow: 2px 5px #888888; */
    @media (min-width: 768px) {
       margin-top:9em;
     }
     @media (min-width: 1024px) {
       margin-top:3em;
     }
    @media (min-width: 1440px) {
       margin-top:-3.5em;
       height:40em;
       width:24em;
     }
     @media (min-width: 1920px) {
       margin-top:-9.5em;
     }
     @media (min-width: 2560px) {
       margin-top:-45.5em;
     }
`
const Span= styled.span`
    position:absolute;
    z-index:1;
    color:white;
    top:-0.1em;
    right:0.3em;
    font-size:2em;
` 
// const Box = styled.div`
//     display: flex;
//     border:0.2em solid red;
//     position:absolute;
//     align-items:center;
//     top:0.2em;
//     width:18em;
// `
// const Img = styled.img`
//     height:1.5em;
//     width:1.5em;
//     border-radius:100%;
//     border:0.1em solid blue;
// `
// const P = styled.p`
//     color:#fff;
//     margin-left:0.5em;
//     font-size:0.8em;
//     font-weight:600;
// `
// const Time= styled.p`
//     font-weight:100;
//     font-size:0.8em;
//     color:lightgray;
//     margin-left:1em;
// `
// const I= styled.i`
//     position:absolute;
//     right:0.5em;
//     height:2em;
//     width: 2em;
//     /* background:white; */
// `