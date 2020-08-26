import React, { Component } from "react";
import { Jumbotron, Button, Container, Row, Col, Label } from 'reactstrap';

export default class VotePage extends Component{
    constructor() {
        super();
        this.VoteHandler = this.VoteHandler.bind(this)
    }

    VoteHandler(animal){
        fetch("http://localhost:8080/vote", {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "animal": animal
            })
        }).then(data => console.log(data))
    }


    render() {
        return (
            <div align="center">
                <Button onClick={() => this.VoteHandler("Cat")} color="primary" size="xl">
                    Cat
                </Button>
                <Button onClick={() => this.VoteHandler("Dog")} color="primary" size="xl">
                    Dog
                </Button>
            </div>
        )
    }
}