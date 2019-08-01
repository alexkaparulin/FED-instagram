import React,{Component} from 'react'
import styled from 'styled-components'

import Topbar from './Topbar'
import Links from './Links'
import { Link } from 'react-router-dom';

import Stories from './Stories';
import Post from './Post';
import office from '../media/trumpoffice.jpg'
import show from '../media/garrixshow.jpg'
import imageid from '../media/userimage.jpg'
import garrix from '../media/martin.jpg'
import cardi from '../media/cardi.jpg'
import prize from '../media/prizecardi.jpg'
import zuck from '../media/zuck.jpg'
import mark from '../media/mark.jpg'
import brady from '../media/bardy.jpg'
import superbowl from '../media/superbowl.jpg'
import userPic from '../media/Marsh.jpg'
import Columnstory from './Columnstory';
import Columnfollow from './ColumnFollow';



class Homepage extends Component{

    componentDidMount(){
        // console.log('im here')
        let myPic = localStorage.getItem('fileBase64');
        // myPic.replace(/^data:image\/(png|jpg);base64,/, "");
        this.setState({local:myPic})
        // console.log(myPic)
    }
    constructor(props){
        super(props);
        this.state = {
            original_list:[],
            profile_data: 'Marshmello',
            fullname:'DJ MARSHMELLO',
            local:''
        }
    }
    render(){
        const {local}=this.state;
        return(
        <BoxCon>
            {/* <Topbarhome /> */}
            <Topbar><Links/></Topbar>
            <RowBox>
                <ContentBox>
                    <Stories />
                    <Post  id="DJ Marshmello" src={local}  userphoto={userPic} username="DJ Marshmello"/>
                    <Post  id="MartinGarrix" src={show} userphoto={garrix} username="MartinGarrix" title="Here we go again"/>
                    <Post  id="DonaldTrump" src={office} userphoto={imageid} username="DonaldTrump" title="I'm not angry..."/>
                    <Post  id="CardiB" src={prize} userphoto={cardi} username="CardiB" title="Papparazi.."/>
                    <Post  id="Brady" src={superbowl} userphoto={brady} username="Brady" title="WE MADE IT AGAIN!!!!!"/>
                    <Post  id="Zuckerbeg" src={zuck} userphoto={mark}  username="Zuckerberg" title="First VR meeting"/>
            {/* <Bottomnav/> */}
                </ContentBox>
                <RightBox>
                    <UserBox>
                        <Img src={userPic}></Img>
                        <UserData>
                            <Userid>{this.state.profile_data}</Userid>
                            <UserName>{this.state.fullname}</UserName>
                            {/* <Userid>Marshmello</Userid> */}
                            {/* <UserName>DJ Marshmello</UserName> */}
                        </UserData>
                    </UserBox>
                    <UserStories>
                        <TeBox>
                            <Textgray>Stories</Textgray>
                            <Link to="/stories"><Text>Watch All</Text></Link>
                        </TeBox> 
                        <PeopleStories>
                            <Columnstory />
                            <Columnstory />
                            <Columnstory />
                            <Columnstory />
                            <Columnstory />
                            <Columnstory />
                            <Columnstory /> 
                        </PeopleStories>
                    </UserStories>
                    <UserFollow>
                        <TeBox2>
                            <Textgray>Suggestions For You</Textgray>
                            <Text>See All</Text>
                        </TeBox2> 
                        <PeopleFollowers>
                           <Columnfollow/>
                           <Columnfollow/>
                           <Columnfollow/>
                        </PeopleFollowers>
                    </UserFollow>
                </RightBox>
            </RowBox>
        </BoxCon>
        )
    }
}
export default Homepage

const BoxCon = styled.div`
    display:flex;
    flex-direction:column;
    background:whitesmoke;
`
const ContentBox = styled.div`
    display:flex;   
    flex-direction:column;
    align-items:center;
    margin-top:2em;
`
const RowBox = styled.div`
    display:inline;
    justify-content:center;
    @media (min-width: 60em) {
    display: flex;
      }
`
const RightBox = styled.div`
    display: none;
    @media (min-width: 60em) {
    display: flex;
    flex-direction:column;
    width:20em;
    height:35em;
    margin-top:3em;
    position:sticky;
    top:5em;
      }
`
const UserBox = styled.div`
    display:flex;
    height:3em;
    align-items:center;
    margin-bottom:1em;
`
const Img = styled.img`
      height:3em;
      width:3em;
      border-radius:100%;
`
const UserData = styled.div`
      display:flex;
      flex-direction:column;
      justify-content:center;
      margin-left:1em;
`  
const UserName = styled.p`
     font-size:0.9em;
     margin-top:-1em;
     font-weight:100;
`
const Userid = styled.p`
      font-size:0.9em;
      font-weight:600;
`
const UserStories = styled.div`
    display: flex;
    flex-direction:column;
    padding-left:1em;
    height:15em;
    margin-bottom:1em;
    border:0.1em solid lightgray;
    border-radius:0.3em;
    background:white;
`
const PeopleStories = styled.div`
      display:flex;
      flex-direction:column;
      overflow:hidden auto;
`
const UserFollow = styled.div`
    display:flex;
    height:12em;
    border:0.1em solid lightgray;
    border-radius:0.3em;
    padding-left:1em;
    flex-direction:column;
    background:#fff;
`
const PeopleFollowers = styled.div`
      display:flex;
      flex-direction:column;
`
const TeBox = styled.div`
    display:flex;  
    justify-content:space-between;
    align-items:center;
    margin:0em 0 -.1em -1em;
    position:sticky;
    height:5em;
    top:0;
`
const Text = styled.p`
    font-size:0.7em;
    font-weight:600;
    margin:0.5em 1em; 
    color:black;
`
const Textgray = styled(Text)`
    color:grey;
    font-size:0.9em;
`
const TeBox2 = styled.div`
    display:flex;  
    justify-content:space-between;
    align-items:center;
    margin:-1em 0 -.1em -1em;
    position:sticky;
    height:5em;
    top:0;
`