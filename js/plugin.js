/* global console, $, alert, console,window */

$(function () {
	'use strict';
    $(window).scrollTop(function(){
       $(".header").height($(window).height()); 
    });
    
    $('.list').on('click',function(){
       $(this).toggleClass('transform'); 
        if($('.list').hasClass('transform'))
            {
               $('.fixed-menu').animate({
                   left:"0"
               },500); 
            }else{
                 $('.fixed-menu').animate({
                   left:"-100%"
               },500) 
            }
    });
    
    
    $(".menu").click(function(){
       $(".drop-menu").slideToggle(500); 
    });
    
    $("li .first-a").click(function(){
        $(this).addClass("active").parent("li").siblings().find("a").removeClass("active");
    });
    
    $(".arrow i").on("click",function(){
       $("html,body").animate({
           scrollTop: $(".featurs").offset().top,
       },500); 
    });
    
    
    
    /*
	$('.navbar ul li a').on('click', function(){
		$(this).addClass('active').parent().siblings().find('a').removeClass('active')
	});
    
    */
    
    $(".search-box .icon").on("click",function (){
       $(".search-box ").toggleClass("translate");
    });
    
    $(".ourwork .show").on("click",function(){
     $(".item.hidden").fadeIn(1000);   
    });
    
    /////////////////////////////////////////////////////
    var leftArrow   = $(".fa-angle-left"),
        rightArrow  = $(".fa-angle-right");
    function slidTest(){
        if($(".client:first").hasClass("active"))
            {
                leftArrow.fadeOut()
            }
        else
            {
                leftArrow.fadeIn()
            }
        if($(".client:last").hasClass("active"))
            {
                rightArrow.fadeOut()
            }
        else
            {
                rightArrow.fadeIn()
            }
        $(".testim i").click(function(){
            if( $(this).hasClass("fa-angle-right") )
                {
                    $(".testim .active").fadeOut(500,function(){
                        $(this).removeClass("active").next(".client").addClass("active").fadeIn(500);
                        slidTest();
                    });
                }
            else
                {
                    $(".testim .active").fadeOut(500,function(){
                        $(this).removeClass("active").prev(".client").addClass("active").fadeIn(500);
                        slidTest();
                    });                
                }


        });
        
    }
    slidTest();
    
    
});
