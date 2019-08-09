import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import {EnterTask} from '../components/EnterTask';
import { PrintTheList } from '../components/PrintTheList';
import Home from '../components/Home';
class App extends React.Component {
  componentDidMount=()=>{
    axios.get('http://localhost:8080/alltasks')
    .then(res=>{
        this.props.updateState1(res.data)
    })
    .catch(res=>{
        console.log("error")
    }) 
}
  render(){
  return (
    <div className="container">

    <EnterTask addTaskToList={()=>{this.props.addTask1(document.getElementById("taskname").value);
    
    }}/>
    <PrintTheList list={this.props.addtask.list}
    deleteTask={(a)=>{this.props.deleteTask1(a)}}
    editTask={(a)=>{this.props.editTask1(a)}}/>
    
    </div>
  );
}

}

const mapStateToProps=(state)=>{
  return{
    addtask: state.addTask,
    change: state.changeS
  };
};
const mapDispatchToProps=(dispatch)=>{
  return{
    updateState1: (task)=>{
      dispatch({
        type: "updateState",
        payload: task
      });
    },
    addTask1: (task)=>{
      dispatch({
        type: "add",
        payload: {taskName:task}
      });
    },
    deleteTask1: (task)=>{
      
      dispatch({
        type: "delete",
        payload: task
      });
    },
    editTask1: (task)=>{
      dispatch({
        type: "edit",
        payload: task
      });
    },
    change1:(task)=>{
      dispatch({
        type: "change",
        payload: task
      });
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App)
