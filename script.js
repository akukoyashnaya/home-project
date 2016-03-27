$(document).ready(function(){
//navigation
   	var nav = 	$('#nav');
	var width = nav.width(); 
	var title=$('.title');
	// var loc = $('nav-list li a').attr("href");
   // var loc=$('body').attr('')
    	$(function(){
			 var className=$('body').attr('class');
			 var y = $('.nav-list li.'+className).addClass('active');
			 var nav = y.text();
			 $('#top-nav>.header').text(nav);
	        console.log(nav);
    		
    	})
//menu	         
    $('#nav').on('mouseover',function(e){
				e.preventDefault();
				if (nav.hasClass("wide")) return;
				nav.addClass("wide");
				nav.animate({width:"200px"}, 200);
				title.show();
			   // console.log('aaa');
			
			});
			
		/*	  $('#nav').on('mouseover', '.nav-list>li',function(e){
				e.preventDefault();
				$(this).addClass('active');//attr('color','#22A7F0')
			
						   // console.log('aaa');
			});*/
	$('#nav').on('mouseleave',  function(e){
				e.preventDefault();
			//	$(this).removeClass('active');
				nav.removeClass('wide');
				nav.animate({width:"60px"}, 200);
				title.hide();
			});
			
/*	$('#nav').on('mouseleave','.nav-list>li', function(e){
				e.preventDefault();
				
				$(this).removeClass('active');
			
			});*/
			
//top-menu

		
//tabs			
	$('.vertical-tab-list>li').on('click', function (e){
		e.preventDefault();
			console.log('aaa');	
		var tab_id= $(this).attr('data-tab'); //find which appropiate div
	
		$('.vertical-tab-list>li').removeClass('vertical-li-clicked');	
		$('.vertical-tab').removeClass('vertical-tab-active');
		$(this).addClass('vertical-li-clicked');
			$("."+tab_id).addClass('vertical-tab-active');
		
	});		


	$('.horizontal-tab-list>li').on('click', function (e){
			e.preventDefault();
		var tab_id= $(this).attr('data-tab'); //find which appropiate div
	
		$('.horizontal-tab-list>li').removeClass('horizontal-li-clicked');	
		$('.horizontal-tab').removeClass('horizontal-tab-active');
		$(this).addClass('horizontal-li-clicked');
			$("."+tab_id).addClass('horizontal-tab-active');
		
	});	

	$('.vertical-tab-list>li').on('mouseover', function (e){
		console.log('aaa');	
		var tab_id= $(this).attr('data-tab'); //find which appropiate div
		$('.vertical-tab-list>li').removeClass('vertical-li-active');
		$(this).addClass('vertical-li-active');
	});	
	
		$('.vertical-tab-list>li').on('mouseleave', function (e){
			console.log('aaa');	
		var tab_id= $(this).attr('data-tab'); //find which appropiate div
		$('.vertical-tab-list>li').removeClass('vertical-li-active');
	
	});	
	
		$('.horizontal-tab-list>li').on('mouseover', function (e){
		console.log('aaa');	
		var tab_id= $(this).attr('data-tab'); //find which appropiate div
		$('.horizontal-tab-list>li').removeClass('horizontal-li-active');
		$(this).addClass('horizontal-li-active');
	});	
	
		$('.horizontal-tab-list>li').on('mouseleave', function (e){
			console.log('aaa');	
		var tab_id= $(this).attr('data-tab'); //find which appropiate div
		$('.horizontal-tab-list>li').removeClass('horizontal-li-active');
	
	});	
	
//modals	
	$('.buttons').on('click','button', function(e){
		e.preventDefault();
	
		var x=$(this).attr('class');
		var y=$(this).text();
			console.log(y);
			$('.light-box').show();
			$('.overlay').show();
			$('.modal-header').addClass(x);
			$('#ok').addClass(x);
			$('.modal-header>span').text(y);
	});
	
		$('.light-box').on('click','.close-alert', function(e){
		e.preventDefault();
			var x=$('#ok').attr('class');
			console.log(x);
			$('.light-box').hide();
			$('.overlay').hide();
			$('.modal-header').removeClass(x);
			$('#ok').removeClass(x);
	});
	
//radio	
	  $('input[type=radio][name=sidebar]').change(function() {
        if (this.value == 'default') {
            $('#nav').css('background-color','#353d47');
        }
        else if (this.value == 'inverse') {
             $('#nav').css('background-color','white');
        }
    });
    
    $('input[type=radio][name=navbar]').change(function() {
        if (this.value == 'default') {
         
            $('#top-nav').css('background-color','white');
             $('#top-nav>.header').css('color','black');
             
             
        }
        else if (this.value == 'inverse') {
            
             $('#top-nav').css('background-color','#353d47');
              $('#top-nav>.header').css('color','white');
        }
    });
			
		});
    
   
				
	