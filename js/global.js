

/*--- footer nav ---*/
$(".header-wrapper").clone().appendTo(".body-wrapper");
$(".header-wrapper").last().css({"bottom":"0", "position":"relative","background-color":"#f2eeeb", "z-index":"100"});
$(".header-wrapper").last().find(".logo-container").after("<p class='footer-message'>Designed and hand-coded by<br/>Wan-Ting Huang &copy; 2016</p>");

/*--- Logo animation ---*/
$(".logo-container").hover(function(e){
	//alert ("test");
	$(this).find(".logo-left").velocity({ translateX: -10 }, 200, "easeOutQuad").velocity({ translateX: 0 }, 200, "easeInSine");  
	$(this).find(".logo-right").velocity({ translateX: 10 }, 200, "easeOutQuad").velocity({ translateX: 0 }, 200, "easeInSine"); 
	e.stopPropagation();
},function(){
	//hover out
});

/*--- mobile navigation ---*/
$(".mobile-menu").click(function(e){
	
	var bodyWrapperTop = $(".body-wrapper").css("top");
	var mobileNavHeight = $(".mobile-nav-container").height();
	if (bodyWrapperTop == "0px") {
		$(".body-wrapper").velocity({ top: mobileNavHeight }, 500, "easeInOutQuart");
		$(".mobile-nav-container").css("display","block");
	} else {
		$(".body-wrapper").velocity({ top: 0 }, 500, "easeInOutQuart", function(){
			$(".mobile-nav-container").css("display","none");
		});
	}
});

var resizeTimeout;
$(window).resize(function(){
	if(!!resizeTimeout){ 
		clearTimeout(resizeTimeout);
	}
  	resizeTimeout = setTimeout(function(){
  		/*--- mobile navigation ---*/
		if($(this).width() >= 768){
			$(".body-wrapper").velocity({ top: 0 }, 200, "easeInOutQuart");
		} else{
			//
		}

	},100);
});

/*--- parallax ---*/

var scrollTimeout;
//var oldScroll = 0;
//var oldScrollDelta = 1;
var flag=true;
var positionFlag=true;


$( window ).scroll(function(){
	var currentScroll = $(window).scrollTop();
	var topSectionHeight = parseInt($(".top-section").css("height"));
	var totalMoveX = [700, 700, 550, 550, 300, 300, 0, -300, -300, -550, -650, -550, -700, -700];
	var totalMoveY = [200, -200, 500, -500, 700, -700, 800, -700, 700, 500, 400, -500, 500, -500];
	//[01-shape-g-left, 02-shape-g-right, 03-shape-n2-left, 04-shape-n2-right, 05-shape-i-bottom, 06-shape-i-top, 
	// 07-shape-t, 08-shape-n1-left, 09-shape-n1-right, 10-shape-a-bottom, 11-shape-a-middle, 12-shape-a-top, 13-shape-w-left, 14-shape-w-right]
	var moveX=[];
	var moveY=[];
	$.each(totalMoveX, function(i, val){
		moveX.push(currentScroll * val / topSectionHeight);
	});
	$.each(totalMoveY, function(i, val){
		moveY.push(currentScroll * val / topSectionHeight);
	});
	//alert(moveX[0])

	var degree = currentScroll*30/topSectionHeight;

	//$("#shape-g-left").css({ transform: translate( moveX[0]+"px", moveY[0]+"px") });
	$("#shape-g-left").attr('transform', 'translate('+moveX[0]+', '+moveY[0]+') rotate('+degree+')');
	$("#shape-g-right").attr('transform', 'translate('+moveX[1]+', '+moveY[1]+') rotate('+degree+')');
	$("#shape-n2-left").attr('transform', 'translate('+moveX[2]+', '+moveY[2]+') rotate('+degree+')');
	$("#shape-n2-right").attr('transform', 'translate('+moveX[3]+', '+moveY[3]+') rotate('+degree+')');
	$("#shape-i-bottom").attr('transform', 'translate('+moveX[4]+', '+moveY[4]+') rotate('+degree+')');
	$("#shape-i-top").attr('transform', 'translate('+moveX[5]+', '+moveY[5]+') rotate('+degree+')');
	$("#shape-t").attr('transform', 'translate('+moveX[6]+', '+moveY[6]+') rotate('+degree+')');
	$("#shape-n1-left").attr('transform', 'translate('+moveX[7]+', '+moveY[7]+') rotate('+degree+')');
	$("#shape-n1-right").attr('transform', 'translate('+moveX[8]+', '+moveY[8]+') rotate('+degree+')');
	$("#shape-a-bottom").attr('transform', 'translate('+moveX[9]+', '+moveY[9]+') rotate('+degree+')');
	$("#shape-a-middle").attr('transform', 'translate('+moveX[10]+', '+moveY[10]+') rotate('+degree+')');
	$("#shape-a-top").attr('transform', 'translate('+moveX[11]+', '+moveY[11]+') rotate('+degree+')');
	$("#shape-w-left").attr('transform', 'translate('+moveX[12]+', '+moveY[12]+') rotate('+degree+')');
	$("#shape-w-right").attr('transform', 'translate('+moveX[13]+', '+moveY[13]+') rotate('+degree+')');

	

	//$("#shape-g-left").attr('transform', 'rotate('+degree+')');

	$("#shape-g-left").css({ opacity: 1-currentScroll/topSectionHeight*2 });
	$("#shape-g-right").css({ opacity: 1-currentScroll/topSectionHeight*2 });
	$("#shape-n2-left").css({ opacity: 1-currentScroll/topSectionHeight*2 });
	$("#shape-n2-right").css({ opacity: 1-currentScroll/topSectionHeight*2 });
	$("#shape-i-bottom").css({ opacity: 1-currentScroll/topSectionHeight*2 });
	$("#shape-i-top").css({ opacity: 1-currentScroll/topSectionHeight*2 });
	$("#shape-t").css({ opacity: 1-currentScroll/topSectionHeight*2 });
	$("#shape-n1-left").css({ opacity: 1-currentScroll/topSectionHeight*2 });
	$("#shape-n1-right").css({ opacity: 1-currentScroll/topSectionHeight*2 });
	$("#shape-a-bottom").css({ opacity: 1-currentScroll/topSectionHeight*2 });
	$("#shape-a-middle").css({ opacity: 1-currentScroll/topSectionHeight*2 });
	$("#shape-a-top").css({ opacity: 1-currentScroll/topSectionHeight*2 });
	$("#shape-w-left").css({ opacity: 1-currentScroll/topSectionHeight*2 });
	$("#shape-w-right").css({ opacity: 1-currentScroll/topSectionHeight*2 });

	
	/*--- work ---*/
	if (currentScroll > 70 && flag ) {

        $('#work-k-top').velocity({ translateX: 50, translateY:-80,rotateZ:15}, 300, "easeOutQuad").velocity({ translateX: 0, translateY:0, rotateZ:0 }, 200, "easeInSine");
        $("#work-k-bottom").velocity({ translateX: 25, translateY:-20,rotateZ:10}, 200, "easeOutQuad").velocity({ translateX: 0, translateY:0, rotateZ:0 }, 200, "easeInSine");
        $("#work-r-top").velocity({ translateX: 15, translateY:-100,rotateZ:15}, 350, "easeOutQuad").velocity({ translateX: 0, translateY:0, rotateZ:0 }, 200, "easeInSine");
        $("#work-r-bottom").velocity({ translateX: 10, translateY:-10,rotateZ:5}, 200, "easeOutQuad").velocity({ translateX: 0, translateY:0, rotateZ:0 }, 200, "easeInSine");
        $("#work-a-bottom").velocity({ translateX: 0, translateY:-10,rotateZ:-4}, 200, "easeOutQuad").velocity({ translateX: 0, translateY:0, rotateZ:0 }, 200, "easeInSine");
        $("#work-a-middle").velocity({ translateX: -10, translateY:-50,rotateZ:-4}, 250, "easeOutQuad").velocity({ translateX: 0, translateY:0, rotateZ:0 }, 200, "easeInSine");
        $("#work-a-top").velocity({ translateX: -15, translateY:-100,rotateZ:-15}, 350, "easeOutQuad").velocity({ translateX: 0, translateY:0, rotateZ:0 }, 200, "easeInSine");
        $("#work-w-left").velocity({ translateX: -15, translateY:-25,rotateZ:-10}, 200, "easeOutQuad").velocity({ translateX: 0, translateY:0, rotateZ:0 }, 200, "easeInSine");
        $("#work-w-right").velocity({ translateX: -10, translateY:-50,rotateZ:-5}, 300, "easeOutQuad").velocity({ translateX: 0, translateY:0, rotateZ:0 }, 200, "easeInSine");
        flag=false;

    } else if(currentScroll <= 70 && currentScroll > 0 && !flag){

    	flag=true;
        
    }

    

    /*--- about parallax---*/
    
    var moveAbout = currentScroll * 200 / topSectionHeight;
	//document.getElementsByClassName("page-intro-container-about")[0].style.transform = "translateY("+moveAbout+"px)";
	$(".page-intro-container-about").css({transform:"translateY("+moveAbout+"px)"});


	/*--- portfolio highlight ---*/
   	$(".highlight").each(function(){
	    if ( $(this).isOnScreenHighlight() ) {
	            // The element is visible, do something
	            //alert("in viewport!");       
	            //alert(highlight);
	            $(this).css({ "background-position": "-100% 0"});
	        } else {
	        	$(this).css({ "background-position": "0 0"});
	        	
	            // The element is NOT visible, do something else
	    }

	});

	/*--- portfolio nav ---*/

	$(".header-wrapper").last().each(function(){
		if ( $(this).isOnScreenFooter() && positionFlag ) {
			$(".portfolio-nav-container").css({ "position": "relative"});
			positionFlag=false;

		} else {
			//$(".portfolio-nav-container").css({ "position": "fixed"});
			//positionFlag=true;
			
		}

		if ( $(".portfolio-nav-container").isOffScreenPortfolioNav() && !positionFlag ) {
			$(".portfolio-nav-container").css({ "position": "fixed"});
			positionFlag=true;
		}
	});
	
});//end of .scroll




/*--- work hover ---*/
$(".thumbnail-hover").hover(function(event){
	//event.stopPropagation();
	$(this).stop().velocity({ opacity:0.9 } , 300);
	

},function(event){
	//event.stopPropagation();
	$(this).stop().velocity({ opacity:0 } , 300);
	//$(".thumbnail-hover").hide(400);
	
});

/*--- work filter ---*/

$(".portfolio-piece-container").each(function(index){
		var z = $(".portfolio-piece-container").length-index;
		//alert(z);
		$(this).css("z-index", z);
});

// Instantiate MixItUp:

$('.portfolio-piece-section').mixItUp();



$(".work-filter-container li a").click(function(event){


	event.preventDefault();

	$(".work-filter-container li a").removeClass("filter-selected");
	$(this).addClass("filter-selected");

	$(".header-wrapper").last().velocity({opacity:0},1).delay(600).velocity({opacity:1},200);


});

//Contact form
$(document).ready(function(){
	    var options={target:'#alert'};
	    $('#contact-form').ajaxForm(options);
});
$.fn.clearForm=function(){
	return this.each(function(){
    	var type=this.type, tag=this.tagName.toLowerCase();
    	if(tag=='form')return$(':input',this).clearForm();
    	if(type=='text'||type=='password'||tag=='textarea')this.value='';
    	else if(type=='checkbox'||type=='radio')this.checked=false;
    	else if(tag=='select')this.selectedIndex=-1;
    });
};


/*--- function ---*/

$.fn.isOnScreenHighlight = function(){

    var fix = parseInt($(".portfolio-nav-container").css("height"));
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height() -fix;
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.bottom || viewport.top > bounds.bottom));
    
};

$.fn.isOnScreenFooter = function(){
    var fix = parseInt($(".portfolio-nav-container").css("height"));
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height() -fix;
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};

$.fn.isOffScreenPortfolioNav = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.bottom >= bounds.bottom ));
    
};















