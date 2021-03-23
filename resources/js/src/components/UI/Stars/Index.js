import React, { Component } from 'react';

import '../../../assets/css/star-rating-svg.css';

export default class Stars extends Component {
    stars = () => {
        $(".ranking-stars").starRating({
            totalStars: 5,
            starShape: 'rounded',
            starSize: 40,
            emptyColor: 'transparent',
            hoverColor: 'salmon',
            activeColor: 'orange',
            useGradient: false,
            callback: function (currentRating) {
                $('input[name="mark"]').val(currentRating);
                console.log(currentRating);
            }
        });

        $(".stars").starRating({
            readOnly: true,
            strokeWidth: 9,
            starSize: 12,
            strokeColor: 'orange',
            activeColor: 'orange',
            emptyColor: 'transparent',
        });

        $(".stars.stars-10").starRating({
            starSize: 10,
        });

        $(".stars.stars-14").starRating({
            starSize: 14,
        });
    }

    componentDidMount() {
        this.stars();
    }

    render() {
        const { mark, readOnly, lg } = this.props;

        return <div className="overflow-hidden" style={{ height: 15 }}>
            <div style={{ top: -6 }} className={`position-relative ${lg ? "stars-14" : "stars-10"} ${readOnly ? "stars" : "ranking-stars"}`} data-rating={mark} />
        </div>;
    }
} 