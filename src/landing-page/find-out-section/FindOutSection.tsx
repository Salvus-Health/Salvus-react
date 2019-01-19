import * as React from 'react';
import "./FindOutSection.css";




class FindOutSection extends React.Component {
    public render() {
        return(
            <div className="pane-style col-md-12 col-12">
                <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                    <div className="find-info-s">
                        <h1 className="ready-font">Ready to begin?</h1>
                        <h5 className="check-avail-text-style">Check availability in<br/> your area</h5>
                        <div className= "search-s">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter zipcode"
                                       aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">Button</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="heart-container-style">
                        <img src="assets/images/landing/heart-fade.png"
                             className="heart-fade-style"/>
                        <div className="heart-white-overlay-style" />

                    </div>
                </div>
            </div>
        );
    }
// btn-outline-secondary
}

export default FindOutSection;

