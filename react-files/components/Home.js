import React, { Component } from 'react';
import axios from 'axios'
class Home extends Component{
    componentDidMount(){
            console.log(document.getElementById("taskname").value+"hm")
            axios.post('http://localhost:8080/addEmployee',
            {
                
                "empName":"abcde",
                 "empId":3
            }) .then(res=>{
                console.log(res);
            })
            .catch(res=>{
                console.log(res);
            }
                )

    }
    render()
    {
        return(
            <div classname="cont">
                <h1>Hi</h1>
            </div>
        )
    }
}
export default Home