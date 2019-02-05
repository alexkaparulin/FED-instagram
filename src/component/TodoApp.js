import React,{Component} from 'react'
import styled from 'styled-components'
import TodoList from '../component/TodoList'

class TodoApp extends Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <Div>
          <TodoList items={this.state.items} />
          <Time>{this.props.time}</Time>
          <Form onSubmit={this.handleSubmit}>
            <Input
              onChange={this.handleChange}
              value={this.state.text}
              placeholder="Add a comment..."
              ></Input>
          </Form>
        </Div>
      );
    }
  
    handleChange=(e)=> {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit=(e)=> {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        // id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  export default TodoApp
  
  const Div = styled.div`
    @media (min-width: 40em) {
       /* overflow-y:auto; */
       margin-top:-0.5em;
       height:auto;
     }
`
  const Form = styled.form`
  `
  const Input = styled.input`
    position:sticky;
    outline:none;
    border:none; 
    width:96%;
    position:relative;
    bottom:0em;
    margin:0 0.5em;
    padding:1em 0;
    border-top:.1em solid lightgray;
`
const Time = styled.p`
    font-size:0.55em;
    font-weight:400;
    color:gray;
`