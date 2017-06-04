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

	$(".btn-box .buy-btn").hover(function(){
		$(".amazon").slideDown();
	},function(){
		var hovertime = setTimeout(function(){$(".amazon").slideUp();},200);
		$(".amazon").hover(function(){
			clearTimeout(hovertime);
			$(".amazon").slideDown();
		},function(){
			setTimeout(function(){$(".amazon").slideUp();},200)
		});
	});

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