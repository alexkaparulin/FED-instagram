import React,{Component} from 'react';
import styled from 'styled-components';
import Likenotification from './Likeontification';
import Bottomnav from './Bottomnav';
import data2 from './Datap';

class Activity extends Component{
    componentDidMount(){
        this.setState({users:data2})
    }
    constructor(props) {
        super(props);
        this.state = {
            users:[] 
        };
    }
render(){
    const {users}= this.state
    // console.log(users)
    let sortUsers = users.map((user,i)=>{
        return(
            <Likenotification key={i} user={user.first_name+user.last_name} userPhoto={user.images} time={i+2+'Mins'}/>
        )
    })
    return(
       <BoxContain>
            <Top>
                <Text>Activity</Text>
            </Top>
            <Div>
                {sortUsers}
            </Div>
            <Bottomnav />
       </BoxContain>
        )
    }
}
export default Activity

const BoxContain = styled.div`
    display:flex;
    flex-direction:column;
    background:white;
`
const Top = styled.div`
    height:2.5em;
    border-bottom:.1em solid  #f5f5f2;
    background:white;
    display:flex;
    align-items:center;
    justify-content:center;
    position:sticky;
    top:0;
    z-index:1;
`
const Text = styled.p`
    font-weight:400;
`
const Div = styled.div`
    display:flex;
    flex-direction:column;
`