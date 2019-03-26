import React,{Component} from 'react';
import styled from 'styled-components';
import { Link,withRouter} from 'react-router-dom';

import guetta from '../media/guetta.jpg'
import david from '../media/davidG.jpg'


class Davidstory extends Component{
    constructor(props){
        super(props);
        this.state = {
            end:false
        }
    }
    close=(e)=>{
        const story = document.querySelector('.container');
        // story.style.display='none';
        this.props.history.push("/homepage");        
    }
    updating(){
        const pic = document.querySelector('.story');
        const images = [guetta];
        pic.style.backgroundImage = "url("+ images[0]+")";
        
            //  let i = 0;
             setTimeout(this.close, 4500)
         
    } 
    updating1(){
        const pic = document.querySelector('.user');
        const images = [david];
        pic.style.backgroundImage = "url("+ images[0]+")";
        
             let i = 0;
             setInterval(function(){
                 pic.style.backgroundImage = "url("+ images[i]+")";
                 i = i + 1;
      if (i === images.length) {
        i =  0;
      }
             }, 4500)
         
    };
    updatingUsers(){
        const user = document.querySelector('.p');
        const time = document.querySelector('.time');
        const text = [
            "DavidGuetta"
        ];
        user.textContent = text[0];
        time.textContent = 1 + "m";
    } 
    componentDidMount(){
        this.updating();
        this.updating1();
        this.updatingUsers();
    }
    render(){
        // const { history } = this.props;
        return(
            <Container className="container">
                <Link to="/homepage"><Span onClick={this.close}>&times;</Span></Link>
                <BoxImage className="story">
                </BoxImage>
                <Box>
                      <Img className="user"></Img>
                      <P className="p"></P>
                      <Time className="time"></Time>
                      <i className="fas fa-ellipsis-h"></i>
                  </Box>
            </Container>
        )
    }
}
export default withRouter(Davidstory);

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
       margin-top:-2.5em;
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
const Box = styled.div`
    display: flex;
    /* border:0.2em solid red; */
    position:absolute;
    align-items:center;
    top:0.5em;
    margin:1em 0;
    width:18em;
`
const Img = styled.img`
    height:2em;
    width:2em;
    border-radius:100%;
    background-size:cover;
    border:0.1em solid #fff;
    background-repeat:no-repeat;
    @media (min-width: 1440px) {
        height:2.5em;
        width:2.5em;
        margin-left:-3em;
     }
     @media (min-width: 1920px) {
    
     }
     @media (min-width: 2560px) {
    
     }
`
const P = styled.p`
    color:#fff;
    margin-left:0.5em;
    font-size:0.8em;
    font-weight:600;
    @media (min-width: 1440px) {
       font-size:.9em;
     }
     @media (min-width: 1920px) {
        font-size:1em;    
     }
     @media (min-width: 2560px) {
    font-size:1.1em;
     }
`
const Time= styled.p`
    font-weight:100;
    font-size:0.8em;
    color:lightgray;
    margin-left:1em;
    @media (min-width: 1440px) {
       font-size:.9em;
       margin-right:3.5em;
     }
     @media (min-width: 1920px) {
        font-size:1em;    
     }
     @media (min-width: 2560px) {
    font-size:1.1em;
     }
    
`