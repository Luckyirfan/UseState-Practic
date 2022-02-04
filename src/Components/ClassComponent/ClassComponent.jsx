import React, {Component} from "react";
import {Button} from "react-bootstrap";
import ClassCounterChaild from "./ClassCounterChaild";

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
                <ClassCounterChaild countNumber = {this.state.count}
                                    countValue = {this.state.count}
                />
                <Button  onClick={this.Increment} >Increment</Button>
                <Button onClick={ () => this.Decrement()} >Decrement</Button>
                
            </div>
        )
    }
}