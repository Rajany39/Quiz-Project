(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
       
})(jQuery);

var html=sessionStorage.getItem("htmlScore");
var css=sessionStorage.getItem("cssScore");
var python=sessionStorage.getItem("pythonScore");
var java=sessionStorage.getItem("javaScore");

    if(html==null){
        document.getElementById('html').innerHTML="";
    }
    else if(html<=3){
        document.getElementById('html').innerHTML="Result: "+(html/5)*100+"%";
    }
    else{
        document.getElementById('htmlPass').innerHTML="Result: "+(html/5)*100+"%";
    }

    //Score condition in CSS
    if(css==null){
        document.getElementById('css').innerHTML="";
    }
    else if(css<=3){
        document.getElementById('css').innerHTML="Result: "+(css/5)*100+"%";
    }
    else{
        document.getElementById('cssPass').innerHTML="Result: "+(css/5)*100+"%";
    }

    //Score condition in PYTHON

    if(python==null){
        document.getElementById('python').innerHTML="";
    }
    else if(python<=3){
        document.getElementById('python').innerHTML="Result: "+(python/5)*100+"%";
    }
    else{
        document.getElementById('pythonPass').innerHTML="Result: "+(python/5)*100+"%";
    }

    //Score condition in JAVA

    if(java==null){
        document.getElementById('java').innerHTML="";
    }
    else if(java<=3){
        document.getElementById('java').innerHTML="Result: "+(java/5)*100+"%";
    }
    else{
        document.getElementById('javaPass').innerHTML="Result: "+(java/5)*100+"%";
    }
    

