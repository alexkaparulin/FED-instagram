import React,{Component} from 'react'
import styled from 'styled-components'

class TodoList extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//         profile_data: 'Dj Marshmello'
//     }
// }
    render() {
      return (
        <Div>
          {this.props.items.map(item => (
            <P key={item.id}><Strong>Dj Marshmello</Strong>{item.text}</P>
          ))}
        </Div>
      );
    }
  }
export default TodoList  

const Div = styled.div`
    /* margin-top:0.4em; */
    padding-top:.2em;
    max-height:2em;
`
const P = styled.p`
  font-size:0.75em;
  margin-top:-0.8em;
  @media (min-width: 80em) {
        margin-top:0.5em;
        /* padding-top:2.5em; */
     }
`
const Strong = styled.strong``