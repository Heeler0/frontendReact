import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import '../App.css';


export default class ResultsPage extends Component{
    constructor() {
        super();
        this.state = {
            response: false,
            endpoint: "http://127.0.0.1:4001"
        };
    }

    //Get data from nodejs api and save it as response
    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("FromAPI", data => this.setState({ response: data }));
    }


    //Display results after first data is in else display loading
    render() {
        const { response } = this.state;
        return (
            <div>
                {response
                    ?
                    <jumbotron>
                    <div style={{width: "100%", height: "15vh"}}>
                    <h1 align="center">
                        Results
                    </h1>
                    </div>
                    <div style={{width: "50%", float: "right"}}>
                        <p align="center" style={{fontSize: "30px", fontFamily: "Lucida Console"}}>
                            Dogs:
                        </p>
                        <p align="center" style={{fontSize: "30px", fontFamily: "Lucida Console"}}>
                            {response.Dog}
                        </p>
                    </div>
                    <div style={{width: "50%", float: "left"}}>
                        <p align="center" style={{fontSize: "30px", fontFamily: "Lucida Console"}}>
                            Cats:
                        </p>
                        <p align="center" style={{fontSize: "30px", fontFamily: "Lucida Console"}}>
                            {response.Cat}
                        </p>
                    </div>
                    </jumbotron>
                    : <div align="center"> <h1>Loading...</h1> </div> }
            </div>
        );
    }
}