import * as React from 'react';
import {
    Carousel,
    // CarouselControl,
    CarouselIndicators,
    CarouselItem
} from 'reactstrap';
import {LandingPageInfo} from "./LandingPageInfo";

interface IInfoState {
    activeIndex: number
}


class InfoSection extends React.Component <any, IInfoState> {

    private items: LandingPageInfo [] = [
        new LandingPageInfo("/assets/images/landing/stories-ambulance.png", "this is my info"),
        new LandingPageInfo("/assets/Holding-Hands-Doctor.svg", "this is my changed info"),
    ];
    private animating = false;

    constructor(props: any) {
        super(props);

        this.state = {activeIndex: 0};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }


    public onExiting() {
        this.animating = true;
    }

    public onExited() {
        this.animating = false;
    }

    public next() {
        if (this.animating) {
            return;
        }
        const nextIndex = this.state.activeIndex === this.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex: nextIndex});
    }

    public previous() {
        if (this.animating) {
            return;
        }
        const nextIndex = this.state.activeIndex === 0 ? this.items.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex: nextIndex});
    }

    public goToIndex(newIndex: number) {
        if (this.animating) {
            return;
        }
        this.setState({activeIndex: newIndex});
    }


    public render() {
        const {activeIndex} = this.state;

        const slides = this.items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.img}
                >
                    <div className="col-md-12 row" style = {{marginBottom:"80px"}}>
                        <div className="col-md-6">
                            <img className="col-md-6" src={item.img} alt={"Alt text"}/>
                        </div>

                        <div className="col-md-6 info-container">
                            <p className="title-s col-md-12">Emergency Care insurance</p>
                            <p className="description-s col-md-12">
                                In the realm of DPC, one has many questions regarding a big life
                                event...
                            </p>

                        </div>

                    </div>
                    {/*<CarouselCaption captionText={item.info} captionHeader={item.info}/>*/}
                </CarouselItem>
            );
        });

        return (

            <div className="col-md-12 info-s">
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    className="col-md-12"
                >
                    {slides}
                    <CarouselIndicators items={this.items} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
                    {/*<CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>*/}
                    {/*<CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>*/}
                </Carousel>
            </div>);
    }

}

export default InfoSection;