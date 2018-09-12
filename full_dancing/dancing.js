$(document).ready(function(){
	$(window).on("load resize",function(){
	
			ww=$(window).width();
			wh=$(window).height();
			//console.log(ww,wh);
			
			var docpos=new Array(0,1*ww,2*ww,3*ww);
			
			console.log(docpos);


			$(".fp-slide").scroll(function(){

			idx=$(".header .h_wrap #menu li").index($(this));// 내부번호 찾기
			console.log(idx);

			var sll = $(this).scrollLeft();
			if( sll >= 3*ww)
			{
				$(".header .h_wrap #menu #pg4").addClass("active1");

			} else {
				
				$(".header .h_wrap #menu #pg4").removeClass("active1");
				
			};//if

		});// scroll on 사용하면 scroll 안에 쓰기
		
	});//resize


	$(".header .h_wrap .btn").click(function(){
		if($(".header .h_wrap #menu").css("display")==("none")){
			
			$(".header .h_wrap #menu").slideDown(function(){
				$(".header .h_wrap #menu li").click(function(){
					$(".header .h_wrap #menu").slideUp();
				});
			});

		}else{

			$(".header .h_wrap #menu").slideUp();

		};
	
	});
	
	

	//li 클릭시 액티브 적용
	$(".header .h_wrap #menu li").click(function(){
		
		$("#menu li").removeClass('active1');

	});

	$(".header .h_wrap #menu li:nth-child(4), .header .h_wrap #menu li:nth-child(5)").click(function(){
			
		$(this).addClass('active1');

	});

	
});