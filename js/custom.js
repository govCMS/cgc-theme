/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
    
    // To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.my_custom_behavior = {
      attach: function(context, settings) {
    
            $( document ).ready(function() {
                // Handle sticky sidebars
                $('.field-type-list-text').hide();
                if($('.field-type-list-text').find('.field-item').html() == 1){
                    var isSticky = true;     
                }
                
                $(window).scroll(function(e){ 
                    if ($(this).scrollTop() > 200  && isSticky){ 
                        $('.region-sidebar-first').addClass('sticky'); 
                    }
                    else if ($(this).scrollTop() < 200  && isSticky){
                        $('.region-sidebar-first').removeClass('sticky'); 
                    } 
                });
                
                /* Top of content code for documents page */
                if($("body").hasClass( "node-type-publication")){
                    $("#block-block-10").prepend("<div id='show-index'>Show index &raquo;</div>");
                    
                    $('#show-index').click(function(){
                        if($("#toc").css('display') == 'none'){
                            $('#show-index').html("Hide index &raquo;");
                            $("#toc").show(400);
                        }
                        else{
                            $('#show-index').html("Show index &raquo;");
                            $("#toc").hide(200);
                        }
                    });
                    
                    if(checkIfMobile()){
                        $("#toc").hide(200);
                    }
                }
                        
                $(".node-type-publication #content h2, .node-type-publication #content h3, .node-type-publication #content h4").each(function(i) {
                    var current = $(this);
                    current.attr("id", "title" + i);
                    $("#toc").append("<a id='link" + i + "' href='#title" +
                    i + "' class='" + current.attr("tagName") + "'>" + 
                    current.html() + "</a>");
                });
                
                /* Removing alert bar on homepage */
                $(".home-alert").click(function(){
                    $("#block-block-3").hide(200);
                });
                
                /* Mobile menu transition timing */
                $('#superfish-1').slicknav({
	                    duration: 100,
	                    prependTo:'.region-navigation'
                });
                
                /* Animation for hamburger */
                $('.slicknav_icon').click(function(){
                    $(this).toggleClass('open');
	            });
	            
	            
	            /* Moving sidebar first before content on mobile */
	            var $window = $(window);

                function arrangeForMobile() {
                    // Rearrange sidebar if on mobile except for publications
                    var windowsize = $window.width();
                    var isMobile = checkIfMobile();
                    
                    // Show index button and hide index on mobile view for publications
                    if($("body").hasClass("node-type-publication")){
                        if(isMobile){
                            $('#show-index').html("Show index &raquo;");
                            $('#show-index').show();
                            $('#toc').hide(200);
                            $("#block-block-10").insertAfter($(".field-name-field-documents"));
                        }
                        else{
                            if($('#content').has('#block-block-10').length){
                                $('#show-index').hide();
                                $('#toc').show();
                                $("#block-block-10").insertAfter($(".region-sidebar-first"));
                            }
                            else
                            {
                                $('#show-index').html("Hide index &raquo;");
                                $('#show-index').hide();
                                $('#toc').show()
                            }
                        }
                    }
                    else {
                        if(isMobile){
                            $(".sidebar-left").insertAfter($("#content"));
                            $('.sidebar-first-sticky-region').removeClass('sticky'); 
                        }
                        else {
                            $(".sidebar-left").insertBefore($("#content"));
                        }
                     }
                }
                
                arrangeForMobile();
        
                $(window).resize(arrangeForMobile);
                
                // Helper functions
                function checkIfMobile(){
                    return window.innerWidth <= 768;
                }
            });
      }
    };


})(jQuery, Drupal, this, this.document);
