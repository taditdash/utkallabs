/* Theme Name:iDea - Clean & Powerful Bootstrap Theme
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version: 1.3
 * Created:October 2014
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

$(document).ready(function () {

    $("#li_services").click(function () {
        $('html, body').animate({
            scrollTop: $("#dv_services").offset().top
        }, 1000);
    });
    $("#li_services_footer").click(function () {
        $('html, body').animate({
            scrollTop: $("#dv_services").offset().top
        }, 1000);
    });
    $("#li_about_us").click(function () {
        $('html, body').animate({
            scrollTop: $("#dv_about_us").offset().top
        }, 1000);
    });
    $("#li_about_us_footer").click(function () {
        $('html, body').animate({
            scrollTop: $("#dv_about_us").offset().top
        }, 1000);
    });
    $("#li_career").click(function () {
        $('html, body').animate({
            scrollTop: $("#dv_career").offset().top
        }, 1000);
    });
    $("#li_career_footer").click(function () {
        $('html, body').animate({
            scrollTop: $("#dv_career").offset().top
        }, 1000);
    });
    $("#li_contact_us").click(function () {
        $('html, body').animate({
            scrollTop: $("#dv_contact_us").offset().top
        }, 1000);
    });
    $("#li_contact_us_footer").click(function () {
        $('html, body').animate({
            scrollTop: $("#dv_contact_us").offset().top
        }, 1000);
    });
});