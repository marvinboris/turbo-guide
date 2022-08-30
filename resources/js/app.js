require('./bootstrap');

$(function () {
    $.getScript('/js/jquery.star-rating-svg.js');
    $.getScript("https://kit.fontawesome.com/132ff047cd.js", () => {
        window.COLOR_PRIMARY = 'orange';

        window.CORS = "https://api.allorigins.win/get?url=";

        if (localStorage.getItem('lang') == "undefined" || !localStorage.getItem('lang')) localStorage.setItem('lang', process.env.MIX_DEFAULT_LANG || 'en');

        require('./src');
    });
});