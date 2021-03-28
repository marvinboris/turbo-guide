require('./bootstrap');

$(function () {
    $.getScript('/js/jquery.star-rating-svg.js');
});

window.CORS = "https://jsonp.afeld.me/?url=";

if (localStorage.getItem('lang') == "undefined" || !localStorage.getItem('lang')) localStorage.setItem('lang', process.env.MIX_DEFAULT_LANG || 'en');

require('./src');