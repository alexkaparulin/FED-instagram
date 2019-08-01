import React,{Component} from 'react';
import styled from 'styled-components';
import data2 from './Datap';

class OpenSearch extends Component{
    
    constructor(){
        super();
        this.state ={
            searchopen:true,
            data:[],
        }
    }
    // update_list(event) {
    //     //console.log('update_list')
    //     const { list_data , on_filter } = this.props;
    //     let txt = event.target.value;

    //     let filtered_list = list_data.filter( item =>
    //         item.first_name.toLowerCase().includes(txt.toLowerCase()) 
    //     )
    //     on_filter(filtered_list)
    // }
    // render() {
    //     return <input type="text" className="filter" onChange={(e) => this.update_list(e)} />
    // }
    // <Filter className="filter" list_data={original_list} on_filter={doBotsFilter}/>
    // 
    download=()=>{
        this.setState({data:data2})
    }
    componentDidMount(){
        this.download();
    }
    render(){

    const { data } = this.state;
    let listToShow = data.map((item,i) => {
        if(item.first_name.toLowerCase().includes(this.props.value)){
        return (
        <EachDataBox key={i}>
            <Img src={item.images}></Img>
            <PBox>
                <PName>{item.first_name}</PName>
                <P>{item.last_name}</P>
            </PBox>
        </EachDataBox>
        )}});

        return(
            <SearchOpen>
                <Box>
                    {listToShow}
                </Box>
            </SearchOpen>
        )
    }
}

export default OpenSearch;

const Img = styled.img`
    height:2.5em;
    width:2.5em;
    border:.1em solid lightgrey;
    border-radius:100%;
`
const P = styled.p`
  color:black;
  margin-right:1em;
  font-size:.8em;
`
const PName = styled.p`
  color:black;
  margin:0 1em -1em auto;
  font-size:1em;
`
const PBox = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:1em;
    text-align:left;
`
const EachDataBox = styled.div`
    display:flex;
    /* border:.1em solid blue; */
    margin:1em 0em;
    border-bottom:.1em solid lightgrey;
    /* padding:2em 0; */
    /* height:2em; */
    width:15em;
`
const SearchOpen = styled.div`
    display:none;
    flex-direction:row;
    /* border:.1em solid red; */
    height:15em;
    width:17em;
    overflow-y:scroll;
    overflow-x:hidden;
    position:absolute;
    right:29em;
    top:3em;
    background:white;
    box-shadow: 1px 2px #888888;
    @media(min-width:144em){
        right:66em;
        height:30em;
        width:22em;
    }
    @media(min-width:70em){
       display:flex;
    }
    
`
const Box = styled.div`
    /* border:.1em solid red; */
`