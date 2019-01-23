import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import LandingPage from "./landing-page/LandingPage";
import FindOutSection from './landing-page/find-out-section/FindOutSection';
// import logo from './logo.svg';

class App extends React.Component {
    public render() {
        return (
            <Router>
                <div className="App container-fluid">
                    {/* < LandingPage color={"blue"} type={"hello"}/> */}

                    <Route path="/" exact="true" component={LandingPage} />
                    <Route path="/about/" component={FindOutSection} />
                </div>
            </Router>

        );
    }
}

export default App;
