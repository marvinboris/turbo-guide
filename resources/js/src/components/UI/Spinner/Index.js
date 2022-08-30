import React, { Component } from 'react';

import './Spinner.css';

let spinnerInterval;

export default class Spinner extends Component {
    componentDidMount() {
        // $.getScript("https://kit.fontawesome.com/762c591422.js", function () {
        const ico_anime = $('.Spinner .ico_item');
        let ico_anime_state = 0;

        function spinner_anime_icon() {
            if (ico_anime_state == 0) {
                let current_ico_anime = $(".Spinner .ico_item_now");
                current_ico_anime.toggleClass("ico_item_now", "");
                ico_anime[0].className += " ico_item_now";
                ico_anime_state = 1;
            } else if (ico_anime_state == 1) {
                let current_ico_anime = $(".Spinner .ico_item_now");
                current_ico_anime.toggleClass("ico_item_now", "");
                ico_anime[1].className += " ico_item_now";
                ico_anime_state = 2;
            } else if (ico_anime_state == 2) {
                let current_ico_anime = $(".Spinner .ico_item_now");
                current_ico_anime.toggleClass("ico_item_now", "");
                ico_anime[2].className += " ico_item_now";
                ico_anime_state = 3;
            } else if (ico_anime_state == 3) {
                let current_ico_anime = $(".Spinner .ico_item_now");
                current_ico_anime.toggleClass("ico_item_now", "");
                ico_anime[3].className += " ico_item_now";
                ico_anime_state = 4;
            } else if (ico_anime_state == 4) {
                let current_ico_anime = $(".Spinner .ico_item_now");
                current_ico_anime.toggleClass("ico_item_now", "");
                ico_anime[4].className += " ico_item_now";
                ico_anime_state = 0;
            }
        }

        spinnerInterval = setInterval(spinner_anime_icon, 250);
        // });
    }

    componentWillUnmount() {
        clearInterval(spinnerInterval);
    }

    render() {
        return <div className="Spinner">
            <span className="loading_container">
                <span className="logo_anime">
                    <img src={document.head.querySelector('#favicon').href} className="logo_anime_val" />
                </span>

                <br />

                <span className="ico_container">
                    <span className="ico_item">
                        <i className="fas fa-hamburger" />
                    </span>

                    <span className="ico_item">
                        <i className="fas fa-egg" />
                    </span>

                    <span className="ico_item ico_item_now">
                        <i className="fas fa-ice-cream" />
                    </span>

                    <span className="ico_item">
                        <i className="fas fa-pizza-slice" />
                    </span>

                    <span className="ico_item">
                        <i className="fas fa-hotdog" />
                    </span>
                </span>
            </span>
        </div>;
    }
}