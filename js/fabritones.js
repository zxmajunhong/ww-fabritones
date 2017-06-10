$(function(){
	$(".size-select").on("click",".selected",function(e){
		e.stopPropagation();
		$(".select-list").slideDown();
	});

	$(".size-select .select-list").on("click","li",function(){
		var _this = $(this);
		$(".size-select .selected").text(_this.text());
		$(".p-price .price").text('$'+_this.data("price"));
	})

	$(document).click(function(){
		$(".select-list").slideUp()
	});

	$(".btn-box .buy-btn").click(function(event){
		var e = window.event || event;
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
		showBuyFc($(this).data("amazon"),$(this).data("wish"));
	});

	$("body").on("click",".buy-fc",function(event){
		var e = window.event || event;
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
		$(".buy-fc").hide();
	})

	document.onclick=function(){
		$(".buy-fc").hide();
	}

	function showBuyFc(amazon,wish){
		if($(".buy-fc").length > 0){
			$(".buy-fc #amazon-href").attr("href",amazon);
			$(".buy-fc #wish-href").attr("href",wish);
			$(".buy-fc").show();
		}else{
			var html = '<div class="buy-fc">'+
						'<p class="buy-tips">You can choose these websites to purchase</p>'+
						'<div class="buy-logo-box">'+
							'<a id="amazon-href" href="'+amazon+'" target="_blank" class="buy-btn">'+
								'<img src="img/fcbuy_amazon.logo.png" alt="" width="235px" height="106px">'+
							'</a>'+
							'<span class="sep"></span>'+
							'<a id="wish-href" href="'+wish+'" target="_blank" class="buy-btn">'+
								'<img src="img/wish_logo.png">'+
							'</a>'+
						'</div>'+
						'<div>'
			$("body").append(html);
		}
	}

	/*$(".btn-box .buy-btn").hover(function(){
		$(".amazon").slideDown();
	},function(){
		var hovertime = setTimeout(function(){$(".amazon").slideUp();},200);
		$(".amazon").hover(function(){
			clearTimeout(hovertime);
			$(".amazon").slideDown();
		},function(){
			setTimeout(function(){$(".amazon").slideUp();},200)
		});
	});*/

	//商品切换
	$(".small-btn").on("click",function(e){
		e.preventDefault();
		var goods_max_index = $(".small-list li").length == 0?0:$(".small-list li").length-1;
			now_index = $(".small-list .on").index();
		console.log(goods_max_index+"--"+now_index);
		var _this = $(this);
		if(_this.is(".prev")){
			if(now_index == 0){
				return;
			}else{
				--now_index;
				$(".small-list li").eq(now_index).addClass("on").siblings("li").removeClass("on");
				$(".top-bigimg img").attr("src",$(".small-list li").eq(now_index).find("img").attr("src"));
			}
		}else{
			if(goods_max_index == now_index){
				return;
			}else{
				++now_index;
				$(".small-list li").eq(now_index).addClass("on").siblings("li").removeClass("on");
				$(".top-bigimg img").attr("src",$(".small-list li").eq(now_index).find("img").attr("src"));
			}
		}
	});

	$(".small-list").on("click","li",function(){
		var _this = $(this);
		_this.addClass("on").siblings("li").removeClass("on");
		$(".top-bigimg img").attr("src",_this.find("img").attr("src"));
	})
})