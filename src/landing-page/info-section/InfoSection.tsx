import * as React from 'react';
import {
    Carousel,
    CarouselControl,
    CarouselIndicators,
    CarouselItem
} from 'reactstrap';
import {LandingPageInfo} from "./LandingPageInfo";

interface IInfoState {
    activeIndex: number
}


class InfoSection extends React.Component <any, IInfoState> {

    private items: LandingPageInfo [] = [
        new LandingPageInfo("/assets/Holding-Hands-Doctor.svg", "this is my info"),
        new LandingPageInfo("/assets/Holding-Hands-Doctor.svg", "this is my changed info"),
    ];
    private animating = true;

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
        if (this.animating) { return; }
        const nextIndex = this.state.activeIndex === this.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex: nextIndex});
    }

    public previous() {
        if (this.animating) { return; }
        const nextIndex = this.state.activeIndex === 0 ? this.items.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex: nextIndex});
    }

    public goToIndex(newIndex: number) {
        if (this.animating) { return; }
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
                    <div className="col-md-12">
                        <div className="col-md-6">   
                            <img className="col-md-6" src={item.img} alt={"Alt text"}/></div>

                        <p className="col-md-6">this is the info that is needed </p></div>
                    {/*<CarouselCaption captionText={item.info} captionHeader={item.info}/>*/}
                </CarouselItem>
            );
        });

        return <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
            className = "col-md-12"
        >
            <CarouselIndicators items={this.items} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
        </Carousel>;
    }

}

export default InfoSection;