import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header class="header fixed clearfix">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">

                            {/* <!-- header-left start --> */}
                            {/* <!-- ================ --> */}
                            <div class="header-left clearfix">

                                {/* <!-- logo --> */}
                                <div class="logo">
                                    <a href="index.html"><img id="logo" src="assets/images/logo_dark_cyan.png" alt="iDea" /></a>
                                </div>

                                {/* <!-- name-and-slogan --> */}
                                {/* <div class="site-slogan text-right">
                                    . . . Ideas To Reality
                                </div> */}
                            </div>
                            {/* <!-- header-left end --> */}

                        </div>
                        <div class="col-md-9">

                            {/* <!-- header-right start --> */}
                            {/* <!-- ================ --> */}
                            <div class="header-right clearfix">

                                {/* <!-- main-navigation start --> */}
                                {/* <!-- ================ --> */}
                                <div class="main-navigation animated">

                                    {/* <!-- navbar start --> */}
                                    {/* <!-- ================ --> */}
                                    <nav class="navbar navbar-default" role="navigation">
                                        <div class="container-fluid">

                                            {/* <!-- Toggle get grouped for better mobile display --> */}
                                            <div class="navbar-header">
                                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                                                    <span class="sr-only">Toggle navigation</span>
                                                    <span class="icon-bar"></span>
                                                    <span class="icon-bar"></span>
                                                    <span class="icon-bar"></span>
                                                </button>
                                            </div>

                                            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                                            <div class="collapse navbar-collapse" id="navbar-collapse-1">
                                                <ul class="nav navbar-nav navbar-right">
                                                    <li class="active">
                                                        <a href="#">Home</a>
                                                    </li>
                                                    <li id="li_services">
                                                        <a href="#">What We Do</a>
                                                    </li>
                                                    {/* <li id="li_technologies">
                                                        <a href="#">Technologies</a>
                                                    </li> */}
                                                    <li id="li_about_us">
                                                        <a href="#">Who We Are</a>
                                                    </li>
                                                    <li id="li_career">
                                                        <a href="#">Why Join Us</a>
                                                    </li>
                                                    <li id="li_contact_us">
                                                        <a href="#">Contact Us</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </nav>
                                    {/* <!-- navbar end --> */}

                                </div>
                                {/* <!-- main-navigation end --> */}

                            </div>
                            {/* <!-- header-right end --> */}

                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;