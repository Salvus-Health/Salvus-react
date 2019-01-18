import * as React from 'react';
import "./IntroSection.css";

class IntroSection extends React.Component {
    public render() {
        return (
            <div className="col-md-12 pic-container" style={{padding: "0px"}}>
                <img className="picture" src={"/assets/Holding-Hands-Doctor.svg"}/>

                <div className={"picture-info col-md-12"}>

                    <div className="info-column offset-1">
                        <p className={"intro-content col-md-9"}>Imagine knowing your doctor</p>
                        <p className="col-md-9 pitch">Sales pitch goes here</p>

                        <div className="col-md-6 pic-but-c">
                            <button className="btn location-but col-md-9">Check locations</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default IntroSection;