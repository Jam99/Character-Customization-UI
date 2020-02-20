/*
	Jámbor Máté
	e-mail: hello@matejambor.com
	website: www.matejambor.com	
*/

//OPTIONS
var tabOpenTimeout = 500;

//DO NOT CHANGE
var tabOpenDisabled = false;

$(document).ready(function(){
	openTab($(".tabs-nav a")[0]); //opens first tab after document loads
	
	//NEXT/PREV SELECTION
	$(".content-next-prev .next-prev-btn").click(function(){
		var current = $(this).siblings(".next-prev-item-container").children(".show");
		current.removeClass("show");
		if($(this).hasClass("btn-next")){ //next
			if($(current).next().length != 0){
				$(current).next().addClass("show");
			}
			else{
				$(this).siblings(".next-prev-item-container").children(".next-prev-item").first().addClass("show");
			}
		}
		else{ //previous
			if($(current).prev().length != 0){
				$(current).prev().addClass("show");
			}
			else{
				$(this).siblings(".next-prev-item-container").children(".next-prev-item").last().addClass("show");
			};
		}
	})
	
	//TOGGLE
	$(".content-toggle .toggle-btn").click(function(){
		$(this).parent().children().toggle();
	})
	
	//COLOR PALETTE / IMAGE PICKER
	$(".content-color-palette .color-item, .content-image-picker .img-btn").click(function(){
		var selected;
		if(selected = $(this).siblings(".selected")[0]){
			$(selected).removeClass("selected");
			$(this).addClass("selected");
		}
	})
	
	//adding color styles to palette by data attribute
	$(".color-item").each(function(){
		var rgb = $(this).data("rgb").split(";");
		$(this).css("background-color", "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")");
	})
})

function openTab(a){
	if($(a).hasClass("current")) return;
	if(tabOpenDisabled) return;
	tabOpenDisabled = true;
	setTimeout(function(){
		tabOpenDisabled = false;
	}, tabOpenTimeout)
	$(".tabs-nav .current").removeClass("current");
	$(a).addClass("current");
	if($(".tabs-container .tab:visible").is(":visible")){
		$(".tab:visible").slideUp("fast", function(){
			$($(a).data("target")).slideDown();
		});
	}
	else{
		$($(a).data("target")).slideDown();
	}
}