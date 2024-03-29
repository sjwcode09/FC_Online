$(function(){
	$("#gnb > ul > li").mouseenter(function(){
				$("header .middle").addClass("active")
			});
		$("header .middle").mouseleave(function(){
			$("header .middle").removeClass("active")
		});
			$(".middle .inner #gnb > ul > li > a").focusin(function(){
			$(this).parent().addClass("active");
			$(".middle").addClass("active");;
			
		});
			$(".middle .inner #gnb li li:last-child").focusout(function(){
			$(this).parent().parent().removeClass("active");
			$(".middle").removeClass("active");
		});

    let amount=0;
    let xoffset=0;
	let winw;

	const mainSwiper=new Swiper(".main_slider .mainSwiper",{
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: { 
			el: ".swiper-pagination",
			clickable: true
			// type: "fraction"
		},
		loop: true, 
		autoplay: {
			delay: 5000,
		}
	});

	// section slider
	let x=0;
	
		function galleryMoving(){
				$(".controller li").removeClass("on");
				$(".controller li").eq(x).addClass("on");
				$(".right li").removeClass("active");
				$(".right li").eq(x).addClass("active");
				$("section .media .left .text ul li").removeClass("active");
				$("section .media .left .text ul li").eq(x).addClass("active");
			
		}
		galleryMoving();//호출이 중요.

		$(".controller ul li").click(function(e){
			e.preventDefault();

			$(".controller ul li").removeClass("on");
			$(this).addClass("on");

			x=$(this).index()
			$(".right ul li").removeClass("active")
			$(".right ul li").eq(x).addClass("active")
					$("section .media .left .text ul li").removeClass("active")
					$("section .media .left .text ul li").eq(x).addClass("active")
		});
		setInterval(function(){
			if(x < 4){
				galleryMoving();
				x++;
			}
			else{
				galleryMoving();
				x=0;
			}
		}, 3000);

		$("#location > a").click(function(e){
			e.preventDefault();

			if($("#center").hasClass("active")){
				$("#center").removeClass("active");
			}

			if($("#location").hasClass("active")){
				$("#location").removeClass("active")
			}
			else{
				$("#location").addClass("active");
			}
		});
		const localData=[
				["서울 센터1", "서울 센터2", "서울 센터3"],
				["인천 센터1", "인천 센터2"],
				["경기도 센터1", "경기도 센터2", "경기도 센터3", "경기도 센터4"],
				["충청도 센터1", "충청도 센터2"],
				["전라도 센터1", "전라도 센터2"],
				["경상도 센터1", "경상도 센터2", "경상도 센터3", "경상도 센터4"],
				["강원도 센터1", "강원도 센터2", "강원도 센터3"],
				["제주도 센터1"]
		];
		let idx, titleTxt;
		// let listString="";

		$("#location li").click(function(e){
			e.preventDefault();

			idx=$(this).index();

			titleTxt=$(this).find("a").text();
			listString="";

			for(let i=0; i<localData[idx].length; i++){
				listString+='<li><a href="">'+localData[idx][i]+'</a></li>\n';
			}

			$("#location > a").text(titleTxt);
			$("#location").removeClass("active");
		});
		
		$("#center > a").click(function(e){
			e.preventDefault();
		});


		$("section .news .news_title ul li").click(function(e){
			e.preventDefault();

			$("section .news .news_title ul li").removeClass("active");
			$(this).addClass("active");
		});

	});