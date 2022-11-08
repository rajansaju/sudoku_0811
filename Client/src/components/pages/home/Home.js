/** @format */

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../common/footer";

const Home = ({ component: Component, ...rest }) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 3000
    };
    return (
        <>
            <div class="banner-sec">
                <div class="banner-img">
                    <img src="img/banner-img.png" alt="" />
                </div>
                <div class="text-block-cover text-custom">
                    <div class="text-block">
                        <h2>
                            <span>Lorem Ipsum is,</span>
                            <br />
                            simply dummy.
                        </h2>
                    </div>
                </div>
                <div className="slick-slide-custom slide-1">
                    <div class="custom-slide">
                        <div className="slide-image slide-image-1">
                            <img src="https://wallpaperset.com/w/full/a/8/4/38610.jpg" />
                        </div>
                    </div>
                </div>
                {/* <Slider {...settings}> */}
                {/* <div className="slick-slide-custom slide-1">
            <div class="custom-slide">
              <div className="slide-image slide-image-1">
                <img src="https://wallpaperset.com/w/full/2/c/3/38612.jpg" />
              </div>
            </div>
          </div>
          <div className="slick-slide-custom slide-1">
            <div class="custom-slide">
              <div className="slide-image slide-image-1">
                <img src="https://wallpaperset.com/w/full/f/a/4/38616.jpg" />
              </div>
            </div>
          </div>
          <div className="slick-slide-custom slide-2">
            <div class="custom-slide slide-1">
              <div className="slide-image slide-image-3">
                <img src="https://wallpaperset.com/w/full/c/5/1/38617.jpg" />
              </div>
            </div>
          </div>
          <div className="slick-slide-custom slide-3">
            <div class="custom-slide slide-1">
              <div className="slide-image slide-image-1">
                <img src="https://wallpaperset.com/w/full/3/d/6/38621.jpg" />
              </div>
            </div>
          </div>
          <div className="slick-slide-custom slide-3">
            <div class="custom-slide slide-1">
              <div className="slide-image slide-image-2">
                <img src="https://wallpaperset.com/w/full/f/0/0/38634.jpg" />
              </div>
            </div>
          </div>
          <div className="slick-slide-custom slide-3">
            <div class="custom-slide slide-1">
              <div className="slide-image slide-image-3">
                <img src="https://wallpaperset.com/w/full/9/f/b/38639.jpg" />
              </div>
            </div>
          </div> */}
                {/* </Slider> */}
            </div>
            <div class="home-abt-sec" id="about-us">
                <div class="container custom-container">
                    <div class="abt-sec-wrapper d-flex">
                        <div class="img-col">
                            <div class="img-block">
                                <img
                                    src="https://wallpaperset.com/w/full/5/7/c/70160.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="text-col">
                            <h2 class="sub-head">About Us</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry’s standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-abt-sec how-it-works" id="how-it-works">
                <div class="container custom-container">
                    <div class="abt-sec-wrapper d-flex">
                        <div class="text-col">
                            <h2 class="sub-head">How it works?</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry’s standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum. Lorem Ipsum passages, and more
                                recently with desktop publishing software like
                                Aldus PageMaker including versions of Lorem
                                Ipsum.Lorem Ipsum passages, and more recently
                                with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum.
                                publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum. Lorem Ipsum
                                passages, and more recently with desktop
                                publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum.Lorem Ipsum
                                passages, and more recently with desktop
                                publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="home-work-sec testimonials" id="testimonials">
                <div class="container custom-container">
                    <h2 class="sub-head">Testimonials</h2>
                    <div class="work-step-wrapper d-flex">
                        <div class="step-col">
                            <div class="step-block">
                                <div class="img-block">
                                    <img
                                        src="https://wallpaperset.com/w/full/a/d/9/40447.jpg"
                                        alt=""
                                    />
                                </div>
                                <h3>Lorem Ipsum</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                        <div class="step-col">
                            <div class="step-block">
                                <div class="img-block">
                                    <img
                                        src="https://wallpaperset.com/w/full/c/9/d/7102.jpg"
                                        alt=""
                                    />
                                </div>
                                <h3>Lorem Ipsum</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                        <div class="step-col">
                            <div class="step-block">
                                <div class="img-block">
                                    <img
                                        src="https://wallpaperset.com/w/full/2/b/e/7104.jpg"
                                        alt=""
                                    />
                                </div>
                                <h3>Lorem Ipsum</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;
