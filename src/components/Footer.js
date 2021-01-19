import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div class="section gray-bg text-muted footer-top clearfix">
                    <div class="container">
                        {/* mini slider - technologies */}
                        <div class="row">
                            <div class="col-md-6">
                                <div class="owl-carousel clients">
                                    <div class="client">
                                        <a href="#"><img src="assets/images/client-1.png" alt="" /></a>
                                    </div>
                                    <div class="client">
                                        <a href="#"><img src="assets/images/client-2.png" alt="" /></a>
                                    </div>
                                    <div class="client">
                                        <a href="#"><img src="assets/images/client-3.png" alt="" /></a>
                                    </div>
                                    <div class="client">
                                        <a href="#"><img src="assets/images/client-4.png" alt="" /></a>
                                    </div>
                                    <div class="client">
                                        <a href="#"><img src="assets/images/client-5.png" alt="" /></a>
                                    </div>
                                    <div class="client">
                                        <a href="#"><img src="assets/images/client-6.png" alt="" /></a>
                                    </div>
                                    <div class="client">
                                        <a href="#"><img src="assets/images/client-7.png" alt="" /></a>
                                    </div>
                                    <div class="client">
                                        <a href="#"><img src="assets/images/client-8.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <blockquote class="inline">
                                    <p class="margin-clear">Design is not just what it looks like and feels like. Design is how it works.</p>
                                    <footer><cite title="Source Title">Steve Jobs </cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- .footer start --> */}
                <div class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="footer-content">
                                    {/* <div class="logo-footer"><img id="logo-footer" src="assets/images/logo_red_footer.png" alt="" /></div> */}
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <h2>Utkal Labs Pvt. Ltd.</h2>
                                            <p class="width-70">We are constantly evolving and committed to serve the best to our customers. Delivering quality solutions has been a top priority for us.</p>
                                            <ul class="social-links circle">
                                                <li class="facebook"><a target="_blank"><i class="fa fa-facebook"></i></a></li>
                                                <li class="twitter"><a target="_blank"><i class="fa fa-twitter"></i></a></li>
                                                {/* <li class="googleplus"><a target="_blank" href="http://plus.google.com"><i class="fa fa-google-plus"></i></a></li> */}
                                                <li class="skype"><a target="_blank"><i class="fa fa-skype"></i></a></li>
                                                <li class="linkedin"><a target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        {/* <div class="col-sm-4">
                                            <h2>Head Office</h2>
                                            <ul class="list-icons">
                                                <li><i class="fa fa-map-marker pr-10"></i>Bhubaneswar, Odisha, India - 751024</li>
                                                <li><i class="fa fa-phone pr-10"></i>+919132994288</li>
                                                <li><i class="fa fa-phone pr-10"></i>+919853438868</li>
                                                <li><i class="fa fa-envelope-o pr-10"></i>contact@utkallabs.com</li>
                                            </ul>
                                        </div> */}
                                        <div class="col-sm-4 col-md-4">
                                            <h2 class="margin-bottom-10">Privacy Policy</h2>
                                            {/* <ul class="list-icons">
                                                <li><em><b>(UAE, Middle East and Europe)</b></em></li>
                                                <li><i class="fa fa-map-marker pr-10"></i>Flat-805, Al Burda Building, Al Qasimiya</li>
                                                <li><i class="fa"></i>Sharjah, UAE</li>
                                                <li><i class="fa fa-phone pr-10"></i>+97165377965, +971559917573</li>
                                            </ul> */}
                                            <p>At Utkal Labs, we care about your privacy. We do not collect your data as it is best way to safeguard your privacy. Period. </p>
                                            <div class="separator-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-bottom hidden-lg hidden-xs"></div>
                        </div>
                        <div class="space-bottom hidden-lg hidden-xs"></div>
                    </div>
                </div>
                {/* <!-- .footer end --> */}

                {/* <!-- .subfooter start --> */}
                <div class="subfooter">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <p>Copyright © 2021 Utkal Labs Pvt. Ltd. All Rights Reserved</p>
                            </div>
                            <div class="col-md-6">
                                <nav class="navbar navbar-default" role="navigation">
                                    {/* <!-- Toggle get grouped for better mobile display --> */}
                                    <div class="navbar-header">
                                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-2">
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div class="collapse navbar-collapse" id="navbar-collapse-2">
                                        <ul class="nav navbar-nav">
                                            <li><a href="#">Home</a></li>
                                            <li><a id="li_services_footer">What We Do</a></li>
                                            <li><a id="li_about_us_footer">Who We Are</a></li>
                                            <li><a id="li_career_footer">Why Join Us</a></li>
                                            <li><a id="li_contact_us_footer">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;