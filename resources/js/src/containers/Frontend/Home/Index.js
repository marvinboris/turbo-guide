import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Home extends Component {
    componentDidMount() {
        $.getScript("https://kit.fontawesome.com/762c591422.js");

        let state_slider_home = 1;
        let slider_text_home_contain = $(".slider_text");
        let slider_img_home_contain = $(".slider_img");

        let carousel = setInterval(slide_right, 13000);

        function on_text_home() {
            slider_text_home_contain.stop().animate({ left: "0%" }, 500);
        }

        function off_text_home() {
            slider_text_home_contain.stop().animate({ left: "-100%" }, 300);
        }

        function on_img_home() {
            slider_img_home_contain.stop().animate({ right: "0%" }, 800);
        }

        function off_img_home() {
            slider_img_home_contain.stop().animate({ right: "-100%" }, 800);
        }

        function slide_right() {
            off_text_home();

            $('.slider_text_item').delay(800).hide(0);
            $('.slider_text' + state_slider_home).show(0, on_text_home);

            off_img_home();

            $('.slider_img_item').delay(800).hide(0);
            $('.slider_img_item' + state_slider_home).show(0, function () {
                on_img_home();
                state_slider_home = state_slider_home == 4 ? 1 : +state_slider_home + 1;
            });
        }

        function slide_left() {
            off_text_home();

            $('.slider_text_item').delay(800).hide(0);
            $('.slider_text' + state_slider_home).show(0, on_text_home);

            off_img_home();

            $('.slider_img_item').delay(800).hide(0);
            $('.slider_img_item' + state_slider_home).show(0, function () {
                on_img_home();
                state_slider_home = state_slider_home == 1 ? 4 : +state_slider_home - 1;
            });
        }

        $(function () {
            $(".slider_control_item_left").click(function () {
                clearInterval(carousel);
                slide_left();
                carousel = setInterval(slide_right, 13000);
            });

            $(".slider_control_item_right").click(function () {
                clearInterval(carousel);
                slide_right();
                carousel = setInterval(slide_right, 13000);
            });
        });

        /***menu mobile script */

        let menu_mobile_state = 1;

        $(function () {
            $(".menu_mob_item").click(function () {
                $(".menu_mob").toggleClass("menu_mob_on", menu_mobile_state);
                menu_mobile_state = 1;
            });

            $(".ico_menu").click(function () {
                if (menu_mobile_state == 1) {
                    $(".menu_mob").toggleClass("menu_mob_on", menu_mobile_state);
                    menu_mobile_state = 0;
                } else {
                    $(".menu_mob").toggleClass("menu_mob_on", menu_mobile_state);
                    menu_mobile_state = 1;
                }
            });
        });

        function Scroller(valeur) {
            /*window.scrollTo(0, valeur);*/

            if (valeur <= 50) {
                $(".header_block").animate(
                    {
                        "box-shadow": "0px 0px 0px rgb(0, 0, 0, 0)",
                        background: "rgba(0,0,0,0)",
                    },
                    500
                );
            } else {
                $(".header_block").animate(
                    {
                        "box-shadow": "0px 0px 4px rgb(0, 0, 0, 0.5)",
                        background: "rgba(255,255,255,0.5)",
                    },
                    500
                );
            }

            $("html, body").animate(
                {
                    scrollTop: valeur,
                },
                800
            );
        }

        $(window).scroll(function () {
            const scroll = Math.round(window.scrollY);

            if (scroll <= $("#home").offset().top) {
                $(".l_h").removeClass("active");
                $(".lin_home").addClass("active");
            } else if (scroll <= $("#about").offset().top) {
                $(".l_h").removeClass("active");
                $(".lin_about").addClass("active");
            } else if (scroll <= $("#third_block").offset().top) {
                $(".l_h").removeClass("active");
                $(".lin_feat").addClass("active");
            } else if (scroll <= $(".contact_box_third_block").offset().top) {
                $(".l_h").removeClass("active");
                $(".lin_contact").addClass("active");
            } else if (scroll <= $(".pricing_third_block").offset().top) {
                $(".l_h").removeClass("active");
                $(".lin_price").addClass("active");
            }
        });

        function FindPosY(item) {
            const py = $(item).offset().top;
            Scroller(py);
        }

        $(function () {
            $(".lin_home").click(function () {
                FindPosY("#home");
                $(".l_h").removeClass("active");
                $(this).addClass("active");
            });

            $(".lin_about").click(function () {
                FindPosY("#about");
                $(".l_h").removeClass("active");
                $(this).addClass("active");
            });

            $(".lin_feat").click(function () {
                FindPosY("#third_block");
                $(".l_h").removeClass("active");
                $(this).addClass("active");
            });

            $(".lin_contact").click(function () {
                FindPosY(".contact_box_third_block");
                $(".l_h").removeClass("active");
                $(this).addClass("active");
            });

            $(".lin_price").click(function () {
                FindPosY(".pricing_third_block");
                $(".l_h").removeClass("active");
                $(this).addClass("active");
            });

            /*
            $(".lin_feat").click(function () {
              FindPosY("#fourth_block");
            });*/
        });

        let plan_type_val = "Month";

        function change_plan() {
            if (plan_type_val == "Month") {
                const plan_type = document.querySelectorAll(".plan_time");
                const plan_price = document.querySelectorAll(".plan_type_price_val");

                plan_price[0].textContent = 15000;
                plan_price[1].textContent = 8500;
                plan_price[2].textContent = 4500;

                plan_type[0].textContent = plan_type_val;
                plan_type[1].textContent = plan_type_val;
                plan_type[2].textContent = plan_type_val;
            } else if (plan_type_val == "Year") {
                const plan_type = document.querySelectorAll(".plan_time");
                const plan_price = document.querySelectorAll(".plan_type_price_val");

                plan_price[0].textContent = 150000;
                plan_price[1].textContent = 85000;
                plan_price[2].textContent = 45000;

                plan_type[0].textContent = plan_type_val;
                plan_type[1].textContent = plan_type_val;
                plan_type[2].textContent = plan_type_val;
            }
        }
        change_plan();

        /** feature script */

        $(function () {
            $(".toggle_item_plan_type").click(function () {
                $(".toggle_item_plan_type").removeClass("toggle_item_plan_type_active");
                $(this).addClass("toggle_item_plan_type_active");

                if ($(this).attr("type") == "Month") {
                    plan_type_val = "Month";
                    change_plan();
                } else if ($(this).attr("type") == "Year") {
                    plan_type_val = "Year";
                    change_plan();
                }
            });
        });

        $(function () {
            $(".plan_type").click(function () {
                $(".plan_type").removeClass("plan_type_active");
                $(this).addClass("plan_type_active");
                $(".plan_type_ico").removeClass("plan_type_ico_active");
                $(this).find(".plan_type_ico").addClass("plan_type_ico_active");

                let type_plan = $(this).attr("type");
                let alert_important_state = true;

                if (type_plan == "premium") {
                    alert_important_state = true;
                    $(".modality_box").addClass("none");

                    $("#premiun_plan_modal").removeClass("none");

                    $(".pricing_modal_box").toggleClass(
                        "alert_important",
                        alert_important_state
                    );
                } else if (type_plan == "standard") {
                    alert_important_state = false;
                    $(".pricing_modal_box").toggleClass(
                        "alert_important",
                        alert_important_state
                    );
                    $(".modality_box").addClass("none");
                    $("#standard_plan_modal").removeClass("none");
                } else if (type_plan == "basic") {
                    alert_important_state = false;
                    $(".pricing_modal_box").toggleClass(
                        "alert_important",
                        alert_important_state
                    );
                    $(".modality_box").addClass("none");
                    $("#basic_plan_modal").removeClass("none");
                }
            });
        });



        let TOTAL_HEIGHT_SLIDER = window.innerHeight;

        if (window.innerHeight <= 636) {
            document.querySelector(".first_block").style.height = "636px";
        } else {
            document.querySelector(".first_block").style.height =
                TOTAL_HEIGHT_SLIDER + "px";
        }
    }

    render() {
        return <div className="body">
            <span id="home" className="first_block">
                <span className="first_block_part1">
                    <span className="background_block">
                        <span className="background_block1"> </span>
                        <span className="background_block2"> </span>
                    </span>

                    <span className="first_block_part1_container">
                        <span className="header_block">
                            <span className="header_block_struct">
                                <span className="header_block_container">
                                    <span className="logo_box">
                                        <Link to="/" className="linknav">
                                            <img className="logo_box_val" src="/images/logo.png" />
                                        </Link>
                                    </span>

                                    <ul className="header_nav">
                                        <li className="l_h active lin_home">Home</li>{' '}
                                        <li className="l_h lin_about">About</li>{' '}
                                        <li className="l_h lin_feat">Features</li>{' '}
                                        <li className="l_h lin_price">Pricing</li>{' '}
                                        <li className="l_h lin_contact">Contact</li>
                                    </ul>
                                </span>
                            </span>
                        </span>
                    </span>

                    <span className="slider_container">
                        <span className="slider_container_struct">
                            <span className="slider_text">
                                <span className="slider_text_item slider_text1">
                                    <span className="slider_text_title1">
                                        Your restaurant needs a touch.
                                        <br />
                                        <span className="border_bottom"> </span>
                                    </span>

                                    <br />

                                    <span className="slider_text_title2">
                                        Discover the best digital menu ever made
                                    </span>

                                    <br />

                                    <span className="slider_text_descr">
                                        Your business is important to us. Git rid of paper menu today.
                                        Grab your E-menu account and keep your customers safe.
                                    </span>

                                    <br />

                                    <Link to="/auth/register" className="linknav">
                                        <span className="bouton_text_home">
                                            <span className="text">Sign Up</span>

                                            <span className="icone"><i className="fal fa-arrow-circle-right"></i></span>
                                        </span>
                                    </Link>
                                    {' '}
                                    <Link to="/auth/login" className="linknav">
                                        <span className="bouton_text_home bouton_design">
                                            <span className="text">Sign In</span>

                                            <span className="icone"><i className="fal fa-arrow-circle-right"></i></span>
                                        </span>
                                    </Link>
                                </span>

                                <span className="slider_text_item slider_text2" style={{ display: 'none' }}>
                                    <span className="slider_text_title1">
                                        Your restaurant needs a touch.

                                        <br />

                                        <span className="border_bottom"> </span>
                                    </span>

                                    <br />

                                    <span className="slider_text_title2"> Why choose E-menu </span>

                                    <br />

                                    <span className="slider_text_descr">
                                        Your business is important to us. Git rid of paper menu today.
                                        Grab your E-menu account and keep your customers safe.
              </span>

                                    <br />

                                    <Link to="/auth/register" className="linknav">
                                        <span className="bouton_text_home">
                                            <span className="text">Sign Up</span>

                                            <span className="icone"><i className="fal fa-arrow-circle-right"></i></span>
                                        </span>
                                    </Link>
                                    {' '}
                                    <Link to="/auth/login" className="linknav">
                                        <span className="bouton_text_home bouton_design">
                                            <span className="text">Sign In</span>

                                            <span className="icone"><i className="fal fa-arrow-circle-right"></i></span>
                                        </span>
                                    </Link>
                                </span>

                                <span className="slider_text_item slider_text3">
                                    <span className="slider_text_title1">
                                        Your restaurant needs a touch.

                <br />

                                        <span className="border_bottom"> </span>
                                    </span>

                                    <br />

                                    <span className="slider_text_title2"> Interest on image menu </span>

                                    <br />

                                    <span className="slider_text_descr">
                                        Your business is important to us. Git rid of paper menu today.
                                        Grab your E-menu account and keep your customers safe.
              </span>

                                    <br />

                                    <Link to="/auth/register" className="linknav">
                                        <span className="bouton_text_home">
                                            <span className="text">Sign Up</span>

                                            <span className="icone"><i className="fal fa-arrow-circle-right"></i></span>
                                        </span>
                                    </Link>
                                    {' '}
                                    <Link to="/auth/login" className="linknav">
                                        <span className="bouton_text_home bouton_design">
                                            <span className="text">Sign In</span>

                                            <span className="icone"><i className="fal fa-arrow-circle-right"></i></span>
                                        </span>
                                    </Link>
                                </span>

                                <span className="slider_text_item slider_text4">
                                    <span className="slider_text_title1">
                                        Your restaurant needs a touch.

                <br />

                                        <span className="border_bottom"> </span>
                                    </span>

                                    <br />

                                    <span className="slider_text_title2">
                                        Food menu management made easy
              </span>

                                    <br />

                                    <span className="slider_text_descr">
                                        Your business is important to us. Git rid of paper menu today.
                                        Grab your E-menu account and keep your customers safe.
              </span>

                                    <br />

                                    <Link to="/auth/register" className="linknav">
                                        <span className="bouton_text_home">
                                            <span className="text">Sign Up</span>

                                            <span className="icone"><i className="fal fa-arrow-circle-right"></i></span>
                                        </span>
                                    </Link>
                                    {' '}
                                    <Link to="/auth/login" className="linknav">
                                        <span className="bouton_text_home bouton_design">
                                            <span className="text">Sign In</span>

                                            <span className="icone"><i className="fal fa-arrow-circle-right"></i></span>
                                        </span>
                                    </Link>
                                </span>
                            </span>

                            <span className="slider_img">
                                <span className="slider_img_item slider_img_item1">
                                    <img className="slider_img_item_val" src="/images/slider/pngaaa.com-269311.png" />
                                </span>

                                <span className="slider_img_item slider_img_item2">
                                    <img className="slider_img_item_val" src="/images/slider/slide1.png" />
                                </span>

                                <span className="slider_img_item slider_img_item3">
                                    <img className="slider_img_item_val" src="/images/slider/slide2.png" />
                                </span>

                                <span className="slider_img_item slider_img_item4">
                                    <img className="slider_img_item_val" src="/images/slider/slide3.png" />
                                </span>
                            </span>
                        </span>

                        <span className="slider_control">
                            <span className="slider_control_item slider_control_item_left">
                                <i className="far fa-chevron-left"></i>
                            </span>

                            <span className="slider_control_item slider_control_item_right slider_control_item_active">
                                <i className="far fa-chevron-right"></i>
                            </span>
                        </span>
                    </span>
                </span>

                <span className="first_block_part2">
                    <span className="ico_menu" id="ico_menu">
                        <i className="fad fa-bars"></i>
                    </span>

                    <span className="element_social">
                        <span className="element_social_item"><a href="https://www.facebook.com/briluceservices/" target="_blank"
                            className="linknav">
                            <span className="element_social_struct">
                                <span className="ico"><i className="fab fa-facebook-f"></i></span>

                                <span className="text">Facebook</span>
                            </span>
                        </a>
                        </span>

                        <span className="element_social_item">
                            <a href="https://twitter.com/Briluceservices/" target="_blank" className="linknav">
                                <span className="element_social_struct">
                                    <span className="ico"><i className="fab fa-twitter"></i></span>

                                    <span className="text">Twitter</span>
                                </span>
                            </a>
                        </span>

                        <span className="element_social_item"><a href="https://www.instagram.com/Briluceservices/" target="_blank"
                            className="linknav">
                            <span className="element_social_struct">
                                <span className="ico"><i className="fab fa-instagram"></i></span>

                                <span className="text">Instagram</span>
                            </span>
                        </a>
                        </span>
                    </span>
                </span>
            </span>

            <span id="about" className="second_block">
                <span className="second_block_struct">
                    <span className="title_left_side_contain">
                        <span className="title_left_side_contain_line"></span>

                        <span className="title_left_side_contain_circle"></span>

                        <span className="title_left_side_contain_text">ABOUT E-MENU</span>
                    </span>

                    <span className="second_block_struct_contain">
                        <span className="second_block_struct_contain_flex">
                            <span className="second_block_text_contain" data-aos="fade-up">
                                <span className="second_block_text_contain_title">
                                    <span className="second_block_text_contain_title">
                                        <span className="second_block_text_contain_title_icon">
                                            <i className="fas fa-briefcase"></i>
                                        </span>

                                        <span className="second_block_text_contain_title_val">
                                            <span className="text1"> About E-menu </span>

                                            <br />

                                            <span className="text2"> Go digital with your restaurant </span>
                                        </span>
                                    </span>
                                </span>

                                <span className="tab_second_block_img_contain">
                                    <img src="/images/Groupe 919.svg" />
                                </span>

                                <span className="second_block_descr">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                    dolor sit amet, consetetur.
            </span>

                                <span className="second_block_bouton_container">
                                    <Link to="/auth/login" className="linknav">
                                        <span className="bouton_text_home">
                                            <span className="text">Get Started</span>

                                            <span className="icone">
                                                <i className="fas fa-chevron-circle-right"></i>
                                            </span>
                                        </span>
                                    </Link>

                                    <a href="#" className="linknav">
                                        <span className="rounded_bnt_container">
                                            <span className="rounded_bnt_container_block">
                                                <i className="fas fa-play-circle"></i>
                                            </span>

                                            <span className="rounded_bnt_container_text">
                                                Quick tour video
                  </span>
                                        </span>
                                    </a>
                                </span>
                            </span>

                            <span className="second_block_img_contain" data-aos="fade-down">
                                <img src="/images/Groupe 919.svg" className="second_block_img_contain_val" />
                            </span>
                        </span>
                    </span>
                </span>
            </span>

            <span id="third_block" className="second_block" data-aos="fade-up">
                <span className="second_block_struct">
                    <span className="title_left_side_contain">
                        <span className="title_left_side_contain_line" style={{ background: '#e6e6e6' }}></span>

                        <span className="title_left_side_contain_circle" style={{ border: "1px solid #0d8004" }}></span>

                        <span className="title_left_side_contain_text">FEATURES</span>
                    </span>

                    <span className="second_block_struct_contain">
                        <span className="second_block_struct_contain_flex">
                            <span className="second_block_text_contain">
                                <span className="second_block_text_contain_title">
                                    <span className="second_block_text_contain_title">
                                        <span className="second_block_text_contain_title_icon">
                                            <i className="fas fa-check-double"></i>
                                        </span>

                                        <span className="second_block_text_contain_title_val">
                                            <span className="text1"> E-menu Features </span>

                                            <br />

                                            <span className="text2"> What we offer </span>
                                        </span>
                                    </span>
                                </span>

                                <span className="second_block_descr" data-aos="fade-right">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                    dolor sit amet, consetetur.
            </span>
                            </span>
                        </span>

                        <span className="feature_block">
                            <span className="feature_block_item">
                                <span className="feature_block_item_struct">
                                    <span className="feature_block_item_icon_contain">
                                        <span className="feature_block_item_icon">
                                            <i className="fas fa-check"></i>
                                        </span>
                                    </span>

                                    <span className="feature_block_title"> Valued Price</span>

                                    <span className="feature_block_descr">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                        diam nonumy eirmod tempor.
              </span>
                                </span>
                            </span>

                            <span className="feature_block_item">
                                <span className="feature_block_item_struct">
                                    <span className="feature_block_item_icon_contain">
                                        <span className="feature_block_item_icon">
                                            <i className="fab fa-servicestack"></i>
                                        </span>
                                    </span>

                                    <span className="feature_block_title"> Quality Service</span>

                                    <span className="feature_block_descr">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                        diam nonumy eirmod tempor.
              </span>
                                </span>
                            </span>

                            <span className="feature_block_item">
                                <span className="feature_block_item_struct">
                                    <span className="feature_block_item_icon_contain">
                                        <span className="feature_block_item_icon">
                                            <i className="fas fa-clock"></i>
                                        </span>
                                    </span>

                                    <span className="feature_block_title">Easy Setup</span>

                                    <span className="feature_block_descr">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                        diam nonumy eirmod tempor.
              </span>
                                </span>
                            </span>

                            <span className="feature_block_item">
                                <span className="feature_block_item_struct">
                                    <span className="feature_block_item_icon_contain">
                                        <span className="feature_block_item_icon">
                                            <i className="fas fa-money-bill-wave"></i>
                                        </span>
                                    </span>

                                    <span className="feature_block_title"> User Friendly</span>

                                    <span className="feature_block_descr">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                        diam nonumy eirmod tempor.
              </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </span>
            </span>

            <span id="fourth_block" className="second_block">
                <span className="second_block_struct">
                    <span className="title_left_side_contain">
                        <span className="title_left_side_contain_line" style={{ background: '#e6e6e6' }}></span>

                        <span className="title_left_side_contain_circle" style={{ border: "1px solid #0d8004" }}></span>

                        <span className="title_left_side_contain_text">WHY CHOOSE US</span>
                    </span>
                </span>

                <span className="title_group">
                    <span className="title_group_val"> Why choose E-menu </span>

                    <br />

                    <span className="underlining">
                        <img src="/images/Groupe 909.svg" />
                    </span>
                </span>

                <span className="feature_block_contain">
                    <span className="feature_block_contain_flex">
                        <span className="feature_block_contain_flex_item" data-aos="fade-right">
                            <span className="title_group">
                                <span className="title_group_val"> Save your money</span>

                                <br />

                                <span className="underlining">
                                    <img src="/images/Groupe 909.svg" />
                                </span>
                            </span>

                            <br />

                            <span className="decr_text_contain">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo
                                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                                amet, consetetur.
          </span>

                            <br />

                            <Link to="/auth/login" className="linknav">
                                <span className="bouton_text_home">
                                    <span className="text">Get Started</span>

                                    <span className="icone">
                                        <i className="fas fa-chevron-circle-right"></i>
                                    </span>
                                </span>
                            </Link>
                        </span>

                        <span className="feature_block_contain_flex_item feature_block_contain_flex_item_image" data-aos="fade-left">
                            <img src="/images/svg/save.svg" />
                        </span>
                    </span>

                    <span className="feature_block_contain_flex flex_img_left">
                        <span className="feature_block_contain_flex_item" data-aos="fade-right">
                            <span className="title_group">
                                <span className="title_group_val">Interest on image menu</span>

                                <br />

                                <span className="underlining">
                                    <img src="/images/Groupe 909.svg" />
                                </span>
                            </span>

                            <br />

                            <span className="decr_text_contain">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo
                                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                                amet, consetetur.
          </span>

                            <br />

                            <a href="#" className="linknav">
                                <span className="bouton_text_home">
                                    <span className="text">Read more</span>

                                    <span className="icone">
                                        <i className="fas fa-chevron-circle-right"></i>
                                    </span>
                                </span>
                            </a>
                        </span>

                        <span className="feature_block_contain_flex_item feature_block_contain_flex_item_image" data-aos="fade-left">
                            <img src="/images/svg/plate.svg" />
                        </span>
                    </span>

                    <span className="feature_block_contain_flex">
                        <span className="feature_block_contain_flex_item" data-aos="fade-right">
                            <span className="title_group">
                                <span className="title_group_val">Safety with ease to customers</span>

                                <br />

                                <span className="underlining">
                                    <img src="/images/Groupe 909.svg" />
                                </span>
                            </span>

                            <br />

                            <span className="decr_text_contain">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo
                                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                                amet, consetetur.
          </span>

                            <br />

                            <Link to="/auth/login" className="linknav">
                                <span className="bouton_text_home">
                                    <span className="text">Get Started</span>

                                    <span className="icone">
                                        <i className="fas fa-chevron-circle-right"></i>
                                    </span>
                                </span>
                            </Link>
                        </span>

                        <span className="feature_block_contain_flex_item feature_block_contain_flex_item_image" data-aos="fade-left">
                            <img src="/images/svg/table.svg" />
                        </span>
                    </span>

                    <span className="feature_block_contain_flex flex_img_left">
                        <span className="feature_block_contain_flex_item" data-aos="fade-right">
                            <span className="title_group">
                                <span className="title_group_val">Food menu management made easy</span>

                                <br />

                                <span className="underlining">
                                    <img src="/images/Groupe 909.svg" />
                                </span>
                            </span>

                            <br />

                            <span className="decr_text_contain">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo
                                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                                amet, consetetur.
          </span>

                            <br />

                            <a href="#" className="linknav">
                                <span className="bouton_text_home">
                                    <span className="text">Read more</span>

                                    <span className="icone">
                                        <i className="fas fa-chevron-circle-right"></i>
                                    </span>
                                </span>
                            </a>
                        </span>

                        <span className="feature_block_contain_flex_item feature_block_contain_flex_item_image" data-aos="fade-left">
                            <img src="/images/svg/manage.svg" />
                        </span>
                    </span>
                </span>
            </span>

            <span id="review_block" className="second_block">
                <span className="second_block_struct"> </span>

                <span className="title_group">
                    <span className="title_group_val">What customers say about us </span>

                    <br />

                    <span className="underlining">
                        <img src="/images/Groupe 909.svg" />
                    </span>
                </span>

                <span className="review_block_contain" data-aos="fade-up">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <span className="review_block_contain_flex">
                                    <span className="review_block_contain_text">
                                        <span className="text1">Fantastic Service</span>

                                        <span className="descr">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                            aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                            justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                                            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                            nonumy eirmod tempor invidunt ut labore et dolore magna
                                            aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                            justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                </span>

                                        <br />

                                        <span className="autor_box">
                                            <span className="autor_name"> JOE MERSON. F </span>

                                            <br />

                                            <span className="autor_job">
                                                Managing Director, EasyGroup LTD
                  </span>
                                        </span>
                                    </span>

                                    <span className="review_block_contain_img">
                                        <img src="/images/Joe.jpg" alt="" />
                                    </span>
                                </span>
                            </div>

                            <div className="carousel-item">
                                <span className="review_block_contain_flex">
                                    <span className="review_block_contain_text">
                                        <span className="text1">Quick Service</span>

                                        <span className="descr">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                            aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                            justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                                            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                            nonumy eirmod tempor invidunt ut labore et dolore magna
                                            aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                            justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                </span>

                                        <br />

                                        <span className="autor_box">
                                            <span className="autor_name"> Jaff Godwill </span>

                                            <br />

                                            <span className="autor_job">
                                                Managing Director, EasyGroup LTD
                  </span>
                                        </span>
                                    </span>

                                    <span className="review_block_contain_img">
                                        <img src="/images/alan.jpg" alt="" />
                                    </span>
                                </span>
                            </div>

                            <div className="carousel-item">
                                <span className="review_block_contain_flex">
                                    <span className="review_block_contain_text">
                                        <span className="text1">Amazing Service</span>

                                        <span className="descr">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                            aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                            justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                                            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                            nonumy eirmod tempor invidunt ut labore et dolore magna
                                            aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                            justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                            sea takimata sanctus est Lorem ipsum dolor sit amet.
                </span>

                                        <br />

                                        <span className="autor_box">
                                            <span className="autor_name"> Johny MERSON. F </span>

                                            <br />

                                            <span className="autor_job">
                                                Managing Director, EasyGroup LTD
                  </span>
                                        </span>
                                    </span>

                                    <span className="review_block_contain_img">
                                        <img src="/images/brice.jpg" alt="" />
                                    </span>
                                </span>
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"
                            style={{ opacity: 0 }}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                            <span className="sr-only">Previous</span>
                        </a>

                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"
                            style={{ opacity: 0 }}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>

                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                    <span className="slider_control">
                        <span className="slider_control_item slider_control_item_left" href="#carouselExampleControls" role="button"
                            data-slide="prev">
                            <i className="far fa-chevron-left" aria-hidden="true"></i>
                        </span>

                        <span className="slider_control_item slider_control_item_active" className="carousel-control-next"
                            href="#carouselExampleControls" role="button" data-slide="next">
                            <i className="far fa-chevron-right" aria-hidden="true"></i>
                        </span>
                    </span>
                </span>
            </span>

            <span style={{ background: "white" }} className="second_block contact_us pricing_third_block"
                data-aos="fade-up">
                <span className="second_block_struct">
                    <span className="title_left_side_contain">
                        <span className="title_left_side_contain_line" style={{ background: '#e6e6e6' }}></span>

                        <span className="title_left_side_contain_circle" style={{ border: "1px solid #0d8004" }}></span>

                        <span className="title_left_side_contain_text">E-menu Pricing</span>
                    </span>

                    <span className="second_block_struct_contain">
                        <span className="second_block_struct_contain_flex">
                            <span className="second_block_text_contain">
                                <span className="second_block_text_contain_title">
                                    <span className="second_block_text_contain_title">
                                        <span className="second_block_text_contain_title_icon">
                                            <i className="fas fa-check-double"></i>
                                        </span>

                                        <span className="second_block_text_contain_title_val">
                                            <span className="text1"> E-menu Pricing </span>

                                            <br />

                                            <span className="text2"> Choose a plan </span>
                                        </span>
                                    </span>
                                </span>

                                <span className="second_block_descr" data-aos="fade-right">
                                    <span className="text_title_contact">
                                        Select the offer the best suits your need
              </span>

                                    <br />

              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
              dolor sit amet, consetetur.
            </span>
                            </span>
                        </span>

                        <span className="pricing_box">
                            <span className="pricing_box_flex">
                                <span className="pricing_modal_box pricing_modal_box_pc alert_important" alert="Recommended">
                                    <span className="pricing_modal_box_struct">
                                        <span className="box_toggle_plan_type">
                                            <span className="toggle_item_plan_type toggle_item_plan_type_active" type="Month">
                                                Monthly
                  </span>

                                            <span className="toggle_item_plan_type" type="Year">
                                                Yearly
                  </span>
                                        </span>

                                        <span id="premiun_plan_modal" className="modality_box">
                                            <span className="modality_box_flex">
                                                <span className="modality_item">Basic Plan features</span>

                                                <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                            </span>

                                            <span className="modality_box_flex">
                                                <span className="modality_item">Standard Plan features</span>

                                                <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                            </span>

                                            <span className="modality_box_flex">
                                                <span className="modality_item">Unlimited meals</span>

                                                <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                            </span>

                                            <span className="modality_box_flex">
                                                <span className="modality_item">3 action buttons</span>

                                                <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                            </span>

                                            <span className="modality_box_flex">
                                                <span className="modality_item">Available Reviews report</span>

                                                <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                            </span>

                                            <span className="modality_box_flex">
                                                <span className="modality_item">3 Ads banners</span>

                                                <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                            </span>

                                            <span className="modality_box_flex">
                                                <span className="modality_item">30 days premium support</span>

                                                <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                            </span>
                                        </span>

                                        <span id="standard_plan_modal" className="modality_box none">
                                            <span className="modality_box_flex">
                                                <span className="modality_item">Basic Plan features</span>

                                                <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                            </span>

                                            <span className="modality_box_flex">
                                                <span className="modality_item">10 meals</span>

                                                <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                            </span>

                                            <span className="modality_box_flex">
                                                <span className="modality_item">2 action buttons</span>

                                                <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                            </span>

                                            <span className="modality_box_flex">
                                                <span className="modality_item">2 Ads banners</span>

                                                <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                            </span>
                                        </span>

                                        <span id="basic_plan_modal" className="modality_box none">
                                            <span className="modality_box_flex">
                                                <span className="modality_item">3 meals</span>

                                                <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                            </span>

                                            <span className="modality_box_flex">
                                                <span className="modality_item">1 action button</span>

                                                <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                            </span>

                                            <span className="modality_box_flex">
                                                <span className="modality_item">System configuration</span>

                                                <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                            </span>

                                            <span className="modality_box_flex">
                                                <span className="modality_item">30 days support</span>

                                                <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                            </span>
                                        </span>
                                    </span>
                                </span>

                                <span className="plan_type_container">
                                    <span className="plan_type plan_type_active" type="premium">
                                        <span className="plan_type_flex">
                                            <span className="plan_type_ico plan_type_ico_active"><i className="fal fa-circle"></i></span>

                                            <span className="plan_type_name">
                                                <span className="text_big">Premium</span>

                                                <br />

                                                <span className="text">Make your selling easier</span>
                                            </span>

                                            <span className="plan_type_price">
                                                <span className="plan_type_price_val"></span> XAF/

                    <span className="plan_time">Month</span>
                                            </span>
                                        </span>

                                        <span className="pricing_modal_box pricing_modal_box_mobile" alert="Recommended">
                                            <span className="pricing_modal_box_struct">
                                                <span className="box_toggle_plan_type">
                                                    <span className="toggle_item_plan_type toggle_item_plan_type_active" type="Month">
                                                        Monthly
                      </span>

                                                    <span className="toggle_item_plan_type" type="Year">
                                                        Yearly
                      </span>
                                                </span>

                                                <span id="premiun_plan_modal" className="modality_box">
                                                    <span className="modality_box_flex">
                                                        <span className="modality_item">Basic Plan features</span>

                                                        <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                                    </span>

                                                    <span className="modality_box_flex">
                                                        <span className="modality_item">Standard Plan features</span>

                                                        <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                                    </span>

                                                    <span className="modality_box_flex">
                                                        <span className="modality_item">Unlimited meals</span>

                                                        <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                                    </span>

                                                    <span className="modality_box_flex">
                                                        <span className="modality_item">3 action buttons</span>

                                                        <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                                    </span>

                                                    <span className="modality_box_flex">
                                                        <span className="modality_item">Available Reviews report</span>

                                                        <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                                    </span>

                                                    <span className="modality_box_flex">
                                                        <span className="modality_item">3 Ads banners</span>

                                                        <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                                    </span>

                                                    <span className="modality_box_flex">
                                                        <span className="modality_item">30 days premium support</span>

                                                        <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>

                                    <span className="plan_type" type="standard">
                                        <span className="plan_type_flex">
                                            <span className="plan_type_ico"><i className="fal fa-circle"></i></span>

                                            <span className="plan_type_name">
                                                <span className="text_big">Standard</span>

                                                <br />

                                                <span className="text">For better selling upgrade</span>
                                            </span>

                                            <span className="plan_type_price">
                                                <span className="plan_type_price_val"></span> XAF/

                    <span className="plan_time">Month</span>
                                            </span>
                                        </span>

                                        <span className="pricing_modal_box pricing_modal_box_mobile no_alert">
                                            <span className="pricing_modal_box_struct">
                                                <span className="box_toggle_plan_type" style={{ marginTop: 0 }}>
                                                    <span className="toggle_item_plan_type toggle_item_plan_type_active " type="Month">
                                                        Monthly
                      </span>

                                                    <span className="toggle_item_plan_type" type="Year">
                                                        Yearly
                      </span>
                                                </span>

                                                <span id="standard_plan_modal" className="modality_box none">
                                                    <span className="modality_box_flex">
                                                        <span className="modality_item">Basic Plan features</span>

                                                        <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                                    </span>

                                                    <span className="modality_box_flex">
                                                        <span className="modality_item">10 meals</span>

                                                        <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                                    </span>

                                                    <span className="modality_box_flex">
                                                        <span className="modality_item">2 action buttons</span>

                                                        <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                                    </span>

                                                    <span className="modality_box_flex">
                                                        <span className="modality_item">2 Ads banners</span>

                                                        <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>

                                    <span className="plan_type" type="basic">
                                        <span className="plan_type_flex">
                                            <span className="plan_type_ico"><i className="fal fa-circle"></i></span>

                                            <span className="plan_type_name">
                                                <span className="text_big">Basic</span>

                                                <br />

                                                <span className="text">Introduce your menus</span>
                                            </span>

                                            <span className="plan_type_price">
                                                <span className="plan_type_price_val"></span> XAF/

                    <span className="plan_time">Month</span>
                                            </span>
                                        </span>

                                        <span className="pricing_modal_box pricing_modal_box_mobile no_alert">
                                            <span className="pricing_modal_box_struct">
                                                <span className="box_toggle_plan_type" style={{ marginTop: 0 }}>
                                                    <span className="toggle_item_plan_type toggle_item_plan_type_active" type="Month">
                                                        Monthly
                      </span>

                                                    <span className="toggle_item_plan_type" type="Year">
                                                        Yearly
                      </span>
                                                </span>

                                                <span id="basic_plan_modal" className="modality_box none">
                                                    <span className="modality_box_flex">
                                                        <span className="modality_item">3 meals</span>

                                                        <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                                    </span>

                                                    <span className="modality_box_flex">
                                                        <span className="modality_item">1 action button</span>

                                                        <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                                    </span>

                                                    <span className="modality_box_flex">
                                                        <span className="modality_item">System configuration</span>

                                                        <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                                    </span>

                                                    <span className="modality_box_flex">
                                                        <span className="modality_item">30 days support</span>

                                                        <span className="modality_check"><i className="fas fa-check-circle"></i></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </span>
            </span>

            <span style={{ background: "white" }} className="second_block contact_box_third_block" data-aos="fade-up">
                <span className="second_block_struct">
                    <span className="title_left_side_contain">
                        <span className="title_left_side_contain_line" style={{ background: "#e6e6e6" }}></span>

                        <span className="title_left_side_contain_circle" style={{ border: "1px solid #0d8004" }}></span>

                        <span className="title_left_side_contain_text">Let's Get In Touch</span>
                    </span>

                    <span className="second_block_struct_contain">
                        <span className="second_block_struct_contain_flex">
                            <span className="second_block_text_contain">
                                <span className="second_block_text_contain_title">
                                    <span className="second_block_text_contain_title">
                                        <span className="second_block_text_contain_title_icon">
                                            <i className="fas fa-check-double"></i>
                                        </span>

                                        <span className="second_block_text_contain_title_val">
                                            <span className="text1"> Contact-us </span>

                                            <br />

                                            <span className="text2">Reach us for more detail </span>
                                        </span>
                                    </span>
                                </span>

                                <span className="second_block_descr" data-aos="fade-right"> </span>
                            </span>
                        </span>

                        <span className="contact_box">
                            <span className="contact_box_struct">
                                <span className="contact_box_title">
                                    <span className="line_design"></span>

                                    <span className="contact_box_title_val">Get In Touch With Us To Have Support If Needed</span>

                                    <span className="line_design"></span>
                                </span>

                                <span className="contact_list">
                                    <span className="contact_list_box">
                                        <span className="contact_list_box_title">Write To Us</span>

                                        <span className="contact_list_box_container">
                                            <span className="contact_list_box_container_flex">
                                                <span className="contact_ico" style={{ color: "#e98809" }}>
                                                    <i className="fas fa-envelope"></i>
                                                </span>

                                                <span className="contact_list_val">
                                                    <span className="text1"> Email</span>

                                                    <span className="text2"><a href="mailto:contact@briluce.com"
                                                        className="linknav">contact@briluce.com</a></span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>

                                    <span className="contact_list_box contact_list_box_max contact_list_box_max_pc">
                                        <span className="contact_list_box_title">Call Us & Whatsapp Us</span>

                                        <span className="contact_list_box_container" style={{ background: "#ed7d00" }}>
                                            <span className="contact_list_box_container_flex">
                                                <span className="contact_ico" style={{ color: "white" }}>
                                                    <i className="fad fa-phone-office"></i>
                                                </span>

                                                <span className="contain_what_flex">
                                                    <span className="contact_list_val" style={{ color: "white" }}>
                                                        <span className="text1"> Office Phone</span>

                                                        <span className="text2"><a href="tel:+237 123 678 898" className="linknav">+237 123 678 898</a></span>
                                                    </span>

                                                    <span className="contact_list_val" style={{ textAlign: "right", color: "white" }}>
                                                        <span className="text1"> Whatsapp</span>

                                                        <span className="text2"><a href="http://wa.me/+237123678898" className="linknav">+237 009 000
                            999</a></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>

                                    <span className="contact_list_box contact_list_box_max contact_list_box_max_mobile">
                                        <span className="contact_list_box_title">Call Us</span>
                                        <span className="contact_list_box_container" style={{ background: "#ed7d00" }}>
                                            <span className="contact_list_box_container_flex">
                                                <span className="contact_ico" style={{ color: "white" }}>
                                                    <i className="fad fa-phone-office" aria-hidden="true"></i>
                                                </span>

                                                <span className="contain_what_flex">
                                                    <span className="contact_list_val" style={{ color: "white" }}>
                                                        <span className="text1"> Office Phone</span>

                                                        <span className="text2"><a href="tel:+237 123 678 898" className="linknav">+237 123 678 898</a></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>

                                    <span className="contact_list_box contact_list_box_max contact_list_box_max_mobile">
                                        <span className="contact_list_box_title"> Whatsapp Us</span>
                                        <span className="contact_list_box_container" style={{ background: "#017906" }}>
                                            <span className="contact_list_box_container_flex">
                                                <span className="contact_ico" style={{ color: "white" }}>
                                                    <i className="fab fa-whatsapp"></i>
                                                </span>

                                                <span className="contain_what_flex">
                                                    <span className="contact_list_val" style={{ color: "white" }}>
                                                        <span className="text1"> Whatsapp</span>

                                                        <span className="text2"><a href="http://wa.me/+237123678898" className="linknav">+237 009 000
                            999</a></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>

                                    <span className="contact_list_box">
                                        <span className="contact_list_box_title">Address</span>
                                        <span className="contact_list_box_container">
                                            <span className="contact_list_box_container_flex">
                                                <span className="contact_ico" style={{ color: "#e98809" }}>
                                                    <i className="fad fa-map-marked-alt"></i>
                                                </span>

                                                <span className="contact_list_val">
                                                    <span className="text1"> Location </span>

                                                    <span className="text2">Douala, Shell New-Bell Cameroon</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>

                            <img src="/images/Group 989.png" className="ico_contact" />
                        </span>
                    </span>
                </span>
            </span>

            <span className="menu_mob">
                <span className="menu_mob_struct">
                    <a href="#" className="linknav">
                        <span className="l_h active lin_home menu_mob_item">Home</span>
                    </a>

                    <br />

                    <a href="#" className="linknav">
                        <span className="l_h lin_about menu_mob_item">About</span>
                    </a>

                    <br />

                    <a href="#" className="linknav">
                        <span className="l_h lin_feat menu_mob_item">Features</span>
                    </a>

                    <br />

                    <a href="#" className="linknav">
                        <span className="l_h lin_price menu_mob_item">Pricing</span>
                    </a>

                    <br />

                    <a href="#" className="linknav">
                        <span className="l_h lin_contact menu_mob_item">Contact</span>
                    </a>
                </span>
            </span>
        </div>;
    }
}

export default withRouter(Home);