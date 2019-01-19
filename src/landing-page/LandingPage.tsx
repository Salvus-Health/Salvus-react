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
                <NavbarSection color="blue" type={"hello"}/>
                <IntroSection/>
                {/*<div className="rectangle-s col-md-12">*/}
                    {/*<img className="white-rec-s" src={"/assets/images/landing/BlueRectangle.png"}/>*/}
                    {/*<img className="blue-rec-s" src={"/assets/images/landing/Rectangle.png"}/>*/}
                {/*</div>*/}
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