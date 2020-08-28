import React, { Component } from "react";
import {Button} from 'reactstrap';
import { Link } from 'react-router-dom'
import '../App.css';

export default class Home extends Component{


    render() {
        return <div>
            <div style={{width: "100%", height: "10vh"}}>
                <h1 align="center">App to answer the best pet question.</h1>
            </div>
            <Link to="/Results">
                <Button >
                    Results
                </Button>
            </Link>
            <Link to="/Vote">
                <Button>
                    To vote
                </Button>
            </Link>
        </div>
    }
}