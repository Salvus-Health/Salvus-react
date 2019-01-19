import * as React from 'react';
// import {SyntheticEvent} from "react";
import FindOutSection from './find-out-section/FindOutSection';
import InfoSection from "./info-section/InfoSection";
import IntroSection from "./Intro-Section";
import './LandingPage.css';
import NavbarSection from "./navbar-section/NavbarSection";

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
    // private myRef = createRef<HTMLDivElement>();

    private navbarTransparent = "navbar sticky-top" +
        " bg-white navbar-expand-lg " +
        "col-md-12 " +
        // "navbar-st navbar-transparent";
        "navbar-st navbar-white";
    //
    // private navbarWhite = "navbar sticky-top" +
    //     " shadow bg-white navbar-expand-lg " +
    //     "col-md-12 " +
    //     "navbar-st navbar-white";


    constructor(props: ILandingProps) {
        super(props)
        // this.myRef = React.createRef();
        this.state = {
            isTop: true,
            myType: this.props.type,
            navbarClass: this.navbarTransparent
        };

    }



    public render() {
        // noinspection TsLint
        return (
            <div className="LandingPage.tsx row">

                {/*<nav id="navbar"*/}
                {/*className={this.state.navbarClass+ "navbar-expand-lg"}>*/}
                {/*<div className="col-md-5 logo-con">*/}
                {/*<a className="navbar-brand" href="#">Salvus health</a>*/}
                {/*</div>*/}
                {/*<button className="navbar-toggler" type="button" data-toggle="collapse"*/}
                {/*data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
                {/*aria-expanded="false" aria-label="Toggle navigation">*/}
                {/*<span className="navbar-toggler-icon"/>*/}
                {/*</button>*/}
                {/*<div className="collapse navbar-collapse col-md-7" id="navbarSupportedContent">*/}
                {/*<div className="navbar-nav mr-auto col-md-7 but-group">*/}
                {/*<button type="button"*/}
                {/*onClick={this.buttonClick.bind(this)}*/}
                {/*className="btn navbar-options nav-item ">{this.props.color}</button>*/}
                {/*<button type="button" className="btn navbar-options nav-item">Stories</button>*/}
                {/*<button type="button" className="btn navbar-options nav-item">About us</button>*/}
                {/*<button type="button" className="btn navbar-options nav-item">Create Account</button>*/}
                {/*<button type="button" className="btn navbar-options nav-item sign-in-option">Sign in</button>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</nav>*/}


                {/*<nav id="navbar" className={this.state.navbarClass}>*/}
                    {/*<a className="navbar-brand col-md-3 col-2" href="#">Salvus health</a>*/}

                    {/*<div className="col-md-9 col-9">*/}
                        {/*<button className="navbar-toggler" type="button" data-toggle="collapse"*/}
                                {/*data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
                                {/*aria-expanded="false" aria-label="Toggle navigation"*/}
                                {/*style={{backgroundColor: "green"}}*/}
                        {/*>*/}
                            {/*<span className="navbar-toggler-icon"/>*/}
                        {/*</button>*/}

                        {/*<div className="collapse navbar-collapse" id="navbarSupportedContent"*/}
                             {/*style={{display: "flex", justifyContent: "flex-end"}}>*/}
                            {/*<ul className="navbar-nav">*/}
                                {/*<li className="nav-item but-group">*/}
                                    {/*<button type="button"*/}
                                            {/*onClick={this.buttonClick.bind(this)}*/}
                                            {/*className="btn navbar-options ">{this.props.color}</button>*/}
                                {/*</li>*/}
                                {/*<li className="nav-item but-group">*/}
                                    {/*<button type="button" className="btn navbar-options ">Stories</button>*/}
                                {/*</li>*/}
                                {/*<li className="nav-item but-group">*/}
                                    {/*<button type="button" className="btn navbar-options">About us</button>*/}
                                {/*</li>*/}
                                {/*<li className="nav-item but-group">*/}
                                    {/*<button type="button" className="btn navbar-options">Create Account</button>*/}
                                {/*</li>*/}
                                {/*<li className="nav-item but-group">*/}
                                    {/*<button type="button" className="btn navbar-options sign-in-option">Sign in</button>*/}
                                {/*</li>*/}
                            {/*</ul>*/}
                            {/*/!*<form className="form-inline my-2 my-lg-0">*!/*/}
                            {/*/!*<input className="form-control mr-sm-2" type="search" placeholder="Search"*!/*/}
                            {/*/!*aria-label="Search"/>*!/*/}
                            {/*/!*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*!/*/}
                            {/*/!*</form>*!/*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</nav>*/}
                <NavbarSection color= "blue" type={"hello"}/>
                <IntroSection/>
                {/* <StoriesSection/> */}
                <InfoSection/>
                <FindOutSection/>
            </div>
        );
    }

    // private buttonClick(e: SyntheticEvent) {
    //     // tslint:disable-next-line:no-console
    //     console.log(e);
    //     // tslint:disable-next-line:no-debugger
    //     debugger;
    //     // tslint:disable-next-line:no-console
    //     console.log(this.state.myType);
    // }
}

export default LandingPage;