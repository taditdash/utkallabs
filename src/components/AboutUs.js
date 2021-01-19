import React, { Component } from "react";

class AboutUs extends Component {
    render() {
        return (
            <div>
                <div id="dv_about_us" class="page-top object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="100">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="text-center title">Who We Are</h1>
                                <div class="separator"></div>
                                <p class="text-center tag-line">All it starts with creating a contact, build strong relationship and then produce a solution to the problem.</p>
                                <br />
                                <div class="row">
                                    <div class="col-md-8">
                                        <p>We are a team of experienced industry experts sharing a common goal to provide optimum solutions to any problem. We are experienced &amp; passionate to create sophisticated and scalable applications for any business.</p>
                                        <h3>We create solutions that enable you achieve success</h3>
                                        <p>We are honest, transparent and committed to do what is best for our customers and Utkal Labs. At Utkal Labs, we undertsand the criticality of each piece of the solutions we build for your business. We therefore, craft all our solutions with industry standard processes and practices. Here are a few highlights of what makes us different- </p>
                                        <ul class="list-icons">
                                            <li class="object-non-visible" data-animation-effect="fadeInUpSmall"><i class="icon-star"></i> Understand clients beyond cultural, liguistic and ethnic barriers.</li>
                                            <li class="object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="100"><i class="icon-star"></i> Passionate team of industry and domain experts. </li>
                                            <li class="object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="300"><i class="icon-star"></i> Team with proven record of on time delivery.</li>
                                            <li class="object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="500"><i class="icon-star"></i> Excellent customer support.</li>
                                        </ul>
                                        {/* <a class="btn btn-lg btn-default" href="page-team.html"><i class="fa fa-users pr-10"></i> Join Us</a> */}
                                    </div>
                                    {/* <!-- sidebar start --> */}
                                    <aside class="sidebar col-md-4">
                                        <div class="side vertical-divider-left">
                                            {/* <div class="block clearfix">
                                            <h3 class="title margin-top-clear">Latest projects</h3>
                                            <div class="separator"></div>
                                            <div class="gallery row">
                                                <div class="gallery-item col-xs-4">
                                                    <div class="overlay-container">
                                                        <img src="assets/images/gallery-1.jpg" alt="" />
                                                        <a href="portfolio-item.html" class="overlay small">
                                                            <i class="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="gallery-item col-xs-4">
                                                    <div class="overlay-container">
                                                        <img src="assets/images/gallery-2.jpg" alt="" />
                                                        <a href="portfolio-item.html" class="overlay small">
                                                            <i class="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="gallery-item col-xs-4">
                                                    <div class="overlay-container">
                                                        <img src="assets/images/gallery-3.jpg" alt="" />
                                                        <a href="portfolio-item.html" class="overlay small">
                                                            <i class="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="gallery-item col-xs-4">
                                                    <div class="overlay-container">
                                                        <img src="assets/images/gallery-4.jpg" alt="" />
                                                        <a href="portfolio-item.html" class="overlay small">
                                                            <i class="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="gallery-item col-xs-4">
                                                    <div class="overlay-container">
                                                        <img src="assets/images/gallery-5.jpg" alt="" />
                                                        <a href="portfolio-item.html" class="overlay small">
                                                            <i class="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="gallery-item col-xs-4">
                                                    <div class="overlay-container">
                                                        <img src="assets/images/gallery-6.jpg" alt="" />
                                                        <a href="portfolio-item.html" class="overlay small">
                                                            <i class="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                            <h3 class="title">What Our Clients Say</h3>
                                            <div class="separator"></div>
                                            <blockquote class="margin-clear">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem.</p>
                                                <footer><cite title="Source Title">Steve Doe </cite></footer>
                                            </blockquote>
                                            <blockquote class="margin-clear">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem.</p>
                                                <footer><cite title="Source Title">Steve Doe </cite></footer>
                                            </blockquote>
                                        </div>
                                    </aside>
                                    {/* <!-- sidebar end --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section parallax light-translucent-bg parallax-bg-3">
                    <div class="container">
                        <div class="call-to-action">
                            <div class="row">
                                <div class="col-md-8">
                                    <h1 class="title text-center">Give a boost to your business</h1>
                                    <p class="text-center">Let our domain experts solve your business problems using technology</p>
                                </div>
                                <div class="col-md-4">
                                    <div class="text-center">
                                        <a href="mailto:contact@utkallabs.com" class="btn btn-default btn-lg">Share Your Problem With Us</a>
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

export default AboutUs;