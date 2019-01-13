import * as React from 'react';
import './App.css';

import LandingPage from "./landing-page/LandingPage";
// import logo from './logo.svg';

class App extends React.Component {
    public render() {
        return (
            <div className="App container-fluid">
                < LandingPage color={"blue"} type={"hello"}/>
            </div>

        );
    }
}

export default App;
