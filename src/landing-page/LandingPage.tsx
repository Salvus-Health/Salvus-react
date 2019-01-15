import * as React from 'react';
import {createRef, SyntheticEvent} from "react";
import IntroSection from "./Intro-Section";
import './LandingPage.css';
import StoriesSection from './stories/Stories-Section';

interface ILandingProps {
    color?: 'blue' | 'green' | 'yellow';
    type: "hello";
}

interface ILandingStates {
    // myRef: RefObject<HTMLDivElement>;
    myType: string;
    isTop: boolean;
    navbarClass: string

}

class LandingPage extends React.Component<ILandingProps, ILandingStates> {
    // Todo: delete mytype for
    // Todo: refactor navbar to a component
    private myRef = createRef<HTMLDivElement>();

    private navbarTransparent = "navbar sticky-top" +
        " shadow-sm bg-white " +
        "rounded col-md-12 " +
        "navbar-st navbar-transparent";

    private navbarWhite = "navbar sticky-top" +
        " shadow-sm bg-white " +
        "rounded col-md-12 " +
        "navbar-st navbar-white";


    constructor(props: ILandingProps) {
        super(props)
        // this.myRef = React.createRef();
        this.state = {
            isTop: true,
            myType: this.props.type,
            navbarClass: this.navbarTransparent
        };

    }


    public componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {

                if (isTop === true) {
                    this.setState({isTop, navbarClass: this.navbarTransparent});
                } else {
                    this.setState({isTop, navbarClass: this.navbarWhite});
                }
            }
        });
    }

    public render() {
        // noinspection TsLint
        return (
            <div className="LandingPage.tsx row">

                <nav id="navbar"
                     ref={this.myRef}
                     className={this.state.navbarClass}>
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
                <StoriesSection/>
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