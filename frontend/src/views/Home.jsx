import React, { Component } from "react";
import { Jumbotron, Button, Container, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom'

export default class Home extends Component{
    render() {
        return (
            <div align="center" style={{marginTop : "10%"}}>
                <Link to="/Results">
                    <Button color="primary" size="xl">
                        Results
                    </Button>
                </Link>
                <Link to="/Vote">
                    <Button color="primary" size="xl">
                        To vote
                    </Button>
                </Link>
            </div>

        )
    }
}