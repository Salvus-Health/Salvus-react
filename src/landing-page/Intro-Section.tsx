import * as React from 'react';
import "./IntroSection.css";

class IntroSection extends React.Component {
    public render() {
        return (
            <div className="col-md-12" style={{padding: "0px"}}>
                <img className="col-md-12 picture" src={"/assets/Holding-Hands-Doctor.svg"}/>

                <div className={"picture-info"}>
                    <p>Imagine knowing your doctor</p>
                    <p>Sales pitch goes here</p>
                    <button>Check locations</button>
                </div>
            </div>
        );
    }
}

export default IntroSection;