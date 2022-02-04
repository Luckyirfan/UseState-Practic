import React, {Component} from "react";
import {Button} from "react-bootstrap";

export class ClassCounter extends Component{
    constructor (){
        super();
        this.state= {
            count : 0,
            
        };
    }
    Increment=()=>{
    this.setState((prevState) =>({count:prevState.count +1,}))

};
    Decrement=()=>{
        this.setState({count: this.state.count-1});
                    ///////////////////////dusra btarikha/////////////
    };
    render (){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <Button  onClick={this.Increment} >Increment</Button>
                <Button onClick={ () => this.Decrement()} >Decrement</Button>
            </div>
        )
    }
}