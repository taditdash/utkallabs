import React, { Component } from "react";

class Technologies extends Component {
    render() {
        return (
            <div>
                <div id="dv_technologies" class="page-top object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="100">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="text-center title">Technologies</h1>
                                <div class="separator"></div>
                                <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div class="filters">
                                    <ul class="nav nav-pills">
                                        <li class="active"><a href="#" data-filter="*">All</a></li>
                                        <li><a href="#" data-filter=".frontend">Frontend Technologies</a></li>
                                        <li><a href="#" data-filter=".backend">Backend Technologies</a></li>
                                        <li><a href="#" data-filter=".database">Database Technologies</a></li>
                                        <li><a href="#" data-filter=".others">Others</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="isotope-container">
                            <div class="col-sm-6 col-md-3 isotope-item frontend">
                                <div class="image-box">
                                    <div class="overlay-container">
                                        <img src="assets/images/portfolio-1.jpg" alt="" />
                                        <a class="overlay technologies-overlay small">
                                            <img src="assets/images/portfolio-1-color.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3 isotope-item frontend">
                                <div class="image-box">
                                    <div class="overlay-container">
                                        <img src="assets/images/portfolio-2.jpg" alt="" />
                                        <a class="overlay technologies-overlay small">
                                            <img src="assets/images/portfolio-2-color.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3 isotope-item web-design">
                                <div class="image-box">
                                    <div class="overlay-container">
                                        <img src="assets/images/portfolio-3.jpg" alt="" />
                                        <a href="portfolio-item.html" class="overlay small">
                                            <i class="fa fa-link"></i>
                                            <span>Web Design</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3 isotope-item site-building">
                                <div class="image-box">
                                    <div class="overlay-container">
                                        <img src="assets/images/portfolio-4.jpg" alt="" />
                                        <a href="portfolio-item.html" class="overlay small">
                                            <i class="fa fa-link"></i>
                                            <span>Site Building</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3 isotope-item app-development">
                                <div class="image-box">
                                    <div class="overlay-container">
                                        <img src="assets/images/portfolio-5.jpg" alt="" />
                                        <a href="portfolio-item.html" class="overlay small">
                                            <i class="fa fa-link"></i>
                                            <span>App Development</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3 isotope-item web-design">
                                <div class="image-box">
                                    <div class="overlay-container">
                                        <img src="assets/images/portfolio-6.jpg" alt="" />
                                        <a href="portfolio-item.html" class="overlay small">
                                            <i class="fa fa-link"></i>
                                            <span>Web Design</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3 isotope-item site-building">
                                <div class="image-box">
                                    <div class="overlay-container">
                                        <img src="assets/images/portfolio-7.jpg" alt="" />
                                        <a href="portfolio-item.html" class="overlay small">
                                            <i class="fa fa-link"></i>
                                            <span>Site Building</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3 isotope-item web-design">
                                <div class="image-box">
                                    <div class="overlay-container">
                                        <img src="assets/images/portfolio-8.jpg" alt="" />
                                        <a href="portfolio-item.html" class="overlay small">
                                            <i class="fa fa-link"></i>
                                            <span>Web Design</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section parallax dark-translucent-bg parallax-bg-3">
                    <div class="container">
                        <div class="call-to-action">
                            <div class="row">
                                <div class="col-md-8">
                                    <h1 class="title text-center">We have a solution for your every need</h1>
                                    <p class="text-center">Sed ut Perspiciatis Unde Omnis Iste Sed ut sit  voluptatem accusan tium </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="text-center">
                                        <a href="#" class="btn btn-default btn-lg">Get a Quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Technologies;