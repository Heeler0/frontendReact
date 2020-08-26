import React, { Component } from "react";
import { Jumbotron, Button, Container, Row, Col, Label } from 'reactstrap';
import socketIOClient from "socket.io-client";


export default class ResultsPage extends Component{
    constructor() {
        super();
        this.state = {
            response: false,
            endpoint: "http://127.0.0.1:4001"
        };
    }
    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("FromAPI", data => this.setState({ response: data }));
    }



    render() {
        const { response } = this.state;
        return (
            <div>
                {response
                    ?
                    <div>
                    <p>
                        Dog {response.Dog}
                        Cat {response.Cat}
                    </p>
                    </div>
                    : <div align="center"> <p>Loading...</p> </div> }
            </div>
        );
    }
}