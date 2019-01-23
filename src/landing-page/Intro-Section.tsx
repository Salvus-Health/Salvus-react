import * as React from 'react';
import "./IntroSection.css";

const style = {
    bottomDecor: {
        backgroundSize: '100% auto',
        bottom: 0,
        left: 0,
        minHeight: '20vh',
        position: 'absolute' as 'absolute',
        width: '100vw'
    }
};

class IntroSection extends React.Component {
    public render() {
        return (
                <div className="col-md-12 pic-container" style={{padding: "0px"}}>
                    <img className="picture" src={"assets/holding-hands.png"}/>
                    <div className="bottom-decor" style={style.bottomDecor}/>

                    <div className={"picture-info col-md-12"}>

                        <div className="info-column offset-1">
                            <p className={"intro-content intro-header col-md-10"}>Health Coverage Just for You</p>
                            <p className="intro-desc col-md-8 pitch">Subscription-Based Preventative Care for Your Health. Emergency Coverage for Your Peace of Mind<br/><br/> If You Don’t Love It, Cancel Anytime at No Cost</p>

                            <div className="col-md-6 pic-but-c">
                                <button className="btn location-but col-md-9">Check Availability</button>
                            </div>
                        </div>
                    </div>

                </div>
        );
    }
}

export default IntroSection;
{/*<div className="mobile-s">*/}
{/*this is my section*/}
{/*</div>*/}
{/*</div>*/}