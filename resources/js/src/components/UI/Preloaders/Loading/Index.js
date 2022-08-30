import React, { Component } from 'react';

import './Loading.scss';

let loadingInterval;

export default class Loading extends Component {
    state = {
        fadedOut: false,
    }

    componentDidMount() {
        const ico_anime = $('.UI.Loading .ico_item');
        const length = ico_anime.length;
        let ico_anime_state = 0;

        function loading_anime_icon() {
            let current_ico_anime = $(".UI.Loading .ico_item_now");
            current_ico_anime.toggleClass("ico_item_now", "");
            ico_anime[ico_anime_state].className += " ico_item_now";
            ico_anime_state = ico_anime_state === length - 1 ? 0 : ico_anime_state + 1;
        }

        loadingInterval = setInterval(loading_anime_icon, 250);
    }

    componentDidUpdate() {
        if (!this.state.fadedOut && !this.props.loading) {
            this.setState({ fadedOut: true });
            $('.UI.Loading').fadeOut(2000, function () {
                clearInterval(loadingInterval);
            });
        }
    }

    componentWillUnmount() {
        clearInterval(loadingInterval);
    }

    render() {
        return <>
            <div className={`UI Loading${this.props.isAuthenticated ? " is-auth" : ""}`}>
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
            </div>

            {this.state.fadedOut && this.props.children}
        </>;
    };
}