import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from './views/Home';
import VotePage from './views/VotePage';
import ResultsPage from './views/ResultsPage';

export default class App extends Component {

    //Router to different pages
    render() {
        return (
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/Vote" component={VotePage} />
                <Route path="/Results" component={ResultsPage} />
            </Router>
        )
    }
}