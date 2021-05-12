import React, { Component } from 'react';
import {
    Carousel as BSCarousel,
    CarouselItem,
    CarouselIndicators
} from 'reactstrap';

import View from '../../../../../components/Backend/UI/View/View';

export default class Carousel extends Component {
    state = {
        activeIndex: 0,
        animating: false
    }

    next = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex = newIndex => {
        if (this.state.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { items } = this.props;

        const slides = items.map(item => (
            <CarouselItem onExiting={() => this.setState({ animating: true })} onExited={() => this.setState({ animating: false })} key={item} className="h-100">
                <View content={<img src={item} className="img-fluid w-100" />}>
                    <div className="h-100" style={{ background: `url("${item}") no-repeat top center`, backgroundSize: 'cover' }} />
                </View>
            </CarouselItem>
        ));

        return (
            <BSCarousel id="carousel" activeIndex={this.state.activeIndex} next={this.next} previous={this.previous} className="h-100 carousel-fade Carousel">
                <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />

                {slides}

                {this.props.children}
            </BSCarousel>
        );
    }

}
