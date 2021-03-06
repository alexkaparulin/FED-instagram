import React,{Component} from 'react'
import styled from 'styled-components'

import marsh1 from '../media/marsh1.jpg'
import marsh2 from '../media/marsh2.jpg'
import marsh3 from '../media/marsh3.jpg'
import marsh4 from '../media/marsh4.jpg'
import marsh5 from '../media/marsh5.jpg'
import marsh6 from '../media/marsh6.jpg'
import marsh7 from '../media/marsh7.jpg'
import marsh8 from '../media/marsh8.jpg'
import marsh9 from '../media/marsh9.jpg'
import marsh10 from '../media/marsh10.jpg'
import marsh11 from '../media/marsh11.jpg'
import marsh12 from '../media/marsh12.jpg'


class Profileupload extends Component{
    componentDidMount(){
        // console.log('im here')
        let myPic = localStorage.getItem('fileBase64');
        // myPic.replace(/^data:image\/(png|jpg);base64,/, "");
        this.setState({local:myPic})
        // console.log(myPic.length)
    }
    constructor(props) {
        super(props);
        this.state = {
            images: [marsh1,marsh2,marsh3,marsh4,marsh5,marsh6,marsh7,marsh8,marsh9,marsh10,marsh11,marsh12],
            local:'' 
        };
    }
    render(){
        const {images,local} = this.state;
        // console.log(images)
        let imagesToShow = images.map((image,i) => {
            return (
                <Img key={i} src={image}></Img>
            )});
        return(
        <BoxCon>
            <BoxIcons>
                <i className="fas fa-th" src={marsh1}></i>
                <i className="fas fa-arrows-alt"></i>
                <i className="fas fa-tv"></i>
                <i className="fas fa-bookmark"></i>
                <i className="fas fa-tag"></i>  
            </BoxIcons>
            <UserImages>
             {imagesToShow}
                <Img src={local}></Img>
            </UserImages>
        </BoxCon>
        )
    }
}
export default Profileupload

const BoxCon = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const BoxIcons = styled.div`
    padding: 0 1em;
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:3em;
`
const UserImages = styled.div`
    margin:.2em 0;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    @media (min-width: 70em) {
       width:52em;
    }
`
const Img = styled.img`
    margin:0.05em;
    height:6.5em;
    width:6.5em;
    flex-basis:30%;
    /* flex-grow:1; */
    &:hover{
        opacity:0.75; 
    }
    @media (min-width: 31em) {
        height:8em;
        width:8em;
        margin:0.25em;
    }
    @media (min-width: 48em) {
        height:15em;
        width:9em;
        margin:0.4em;
    }
    @media (min-width: 56.8em) {
        height:16em;
        width:14em;
        margin:0.6em;
     }
       @media (min-width: 80.4em) {
        height:18em;
        width:15em;
        margin:0.45em;
    } 
`