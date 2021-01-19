import React, { Component } from "react";

class ContactUs extends Component {
    render() {
        return (
            <div id="dv_contact_us" class="page-top object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="100">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="text-center title">Contact Us</h1>
                            <div class="separator"></div>
                            <p class="text-center tag-line">Please get in touch with our team to get your questions answered</p>
                            <br />
                            <div class="row">
                                <div class="col-md-8 world-map">
                                </div>
                                {/* <!-- sidebar start --> */}
                                <aside class="col-md-4">
                                    <div class="sidebar">
                                        <div class="side">
                                            <h3 class="title">Utkal Labs Private Limited</h3>
                                            <div class="separator"></div>
                                            <ul class="list">
                                                <li><strong>India Office</strong></li>
                                                <li><i class="fa fa-home pr-10"></i>Raghunathpur, Bhubaneswar<br /><span class="pl-20">&nbsp;Odisha, India - 751024</span></li>
                                                <li><i class="fa fa-phone pr-10"></i>&nbsp;+91 9132994288, +91 9853438868</li>
                                                <li><i class="fa fa-envelope pr-10"></i><a href="mailto:contact@utkallabs.com">contact@utkallabs.com</a></li>
                                            </ul>
                                            <div class="separator-2"></div>
                                            <ul class="list">
                                                <li><strong>UAE, Middle East and Europe Office</strong></li>
                                                <li><i class="fa fa-home pr-10"></i>Flat-805, Al Burda Building, Al Qasimiya<br /><span class="pl-20">&nbsp;Sharjah, UAE</span></li>
                                                <li><i class="fa fa-phone pr-10"></i>&nbsp;+97 165377965, +97 1559917573</li>
                                            </ul>
                                            <div class="separator-2"></div>
                                            {/* <ul class="social-links colored circle small">
                                                <li class="facebook"><a target="_blank"><i class="fa fa-facebook"></i></a></li>
                                                <li class="twitter"><a target="_blank"><i class="fa fa-twitter"></i></a></li>
                                                <li class="skype"><a target="_blank"><i class="fa fa-skype"></i></a></li>
                                                <li class="linkedin"><a target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </aside>
                                {/* <!-- sidebar end --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;