import * as React from 'react';
import {SyntheticEvent} from "react";
import IntroSection from "./Intro-Section";
import './LandingPage.css';

interface ILandingProps {
    color?: 'blue' | 'green' | 'yellow';
    type: "hello";
}

interface ILandingStates {
    // myRef: RefObject<HTMLDivElement>;
    myType: string;

}

class LandingPage extends React.Component<ILandingProps, ILandingStates> {
    // private myRef = createRef<HTMLDivElement>();


    constructor(props: ILandingProps) {
        super(props)
        // this.myRef = React.createRef();
        this.state = {myType: this.props.type};

    }


    public render() {
        // noinspection TsLint
        return (
            <div className="LandingPage.tsx row">

                <nav id="navbar"
                    // ref={this.state.myRef}
                     className={"navbar sticky-top shadow-sm bg-white rounded col-md-12 navbar-st"}>
                    <div className="col-md-5 logo-con">
                        <a className="navbar-brand" href="#">Salvus health</a>
                    </div>
                    {/*<button className="navbar-toggler" type="button" data-toggle="collapse"*/}
                    {/*data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
                    {/*aria-expanded="false" aria-label="Toggle navigation">*/}
                    {/*<span className="navbar-toggler-icon"/>*/}
                    {/*</button>*/}
                    <div className="col-md-7 but-group">

                        <button type="button"
                                onClick={this.buttonClick.bind(this)}
                                className="btn navbar-options ">{this.props.color}</button>
                        <button type="button" className="btn navbar-options ">Stories</button>
                        <button type="button" className="btn navbar-options">About us</button>
                        <button type="button" className="btn navbar-options">Create Account</button>
                        <button type="button" className="btn navbar-options sign-in-option">Sign in</button>
                    </div>
                    {/*<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}


                </nav>
                <IntroSection/>
            </div>
        );
    }

    private buttonClick(e: SyntheticEvent) {
        // tslint:disable-next-line:no-console
        console.log(e);
        // tslint:disable-next-line:no-debugger
        debugger;
        // tslint:disable-next-line:no-console
        console.log(this.state.myType);
    }
}

export default LandingPage;