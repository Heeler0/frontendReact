import React, { Component } from "react";
import {Button} from 'reactstrap';
import { useHistory } from "react-router-dom";
import '../App.css';

export default class VotePage extends Component{
    constructor() {
        super();
        this.VoteHandler = this.VoteHandler.bind(this)
    }

    //Sending vote to spring app
    VoteHandler(animal){
        fetch("http://localhost:8080/vote", {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "animal": animal
            })
        }).then(data => console.log(data));
    }


    render() {
        return (
            <div>
                <div style={{width: "100%", height: "10vh"}}>
                    <h1 align="center">
                        Place Your Vote now
                    </h1>
                </div>
                <Button onClick={() => this.VoteHandler("Cat")} className="styles.voteButton">
                    Cat
                </Button>
                <Button onClick={() => this.VoteHandler("Dog")} className="styles.voteButton">
                    Dog
                </Button>
            </div>
        )
    }
}