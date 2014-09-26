$(document).on('ready', inicio);

function inicio () {
	
	$("#bannerContainer").load("screens/banner.html",function(){

		var options = {
			$AutoPlay: true,       
			$AutoPlayInterval: 2500,  
            $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $ChanceToShow: 2
            },
        };
        var jssor_slider1 = new $JssorSlider$('slider1_container', options);
	});
	// banner 
		

	//end banner



	var total = 0;


	$('.navMenu').mouseenter(function(){
		eliminateText();
		var str = this.id;
		var newStr = str.substring(4, str.length);
		navMenu(this.id,newStr);
	});

	//loadMainImagesMenu();

	$('.buyNow').click(function(){
		buyNow(this.id);

	});



	function buyNow(id){
		total++;
		$('#cart').html(total);
		$('#cartMini').html(total);
		
	};

	function loadMainImagesMenu(){
		$('#menuImages').load('files/menuImage.html', function(){
			$('.imagen').click(function(){
				loadDescription(this.id);
			});
		});	
	};

	
	$('.moreButton').click(function(){
		moreButton(1);	
	});



	function moreButton(number){
		if(number === 1){
			$('.moreButton').addClass('hide');
			$('.xlarge').removeClass('hide');
			$('.xxlarge').removeClass('hide');
			$('.xxxlarge').removeClass('hide');
			$('.narrow').append('<li class="womenMenu black lessButton"><i class="black fa fa-angle-right fa-lg"></i> less...</li>');
			$('.lessButton').click(function(){
			moreButton(2);
			});
		}
		else{
			$('.lessButton').remove();
			$('.xlarge').addClass('hide');
			$('.xxlarge').addClass('hide');
			$('.xxxlarge').addClass('hide');
			$('.narrow').append('<li class="womenMenu black moreButton"><i class="black fa fa-angle-right fa-lg"></i> more...</li>');
			$('.moreButton').click(function(){
				moreButton(1);	
			});
			
		}
	};

	function loadDescription(id){
		$('#menuImages').load('files/mainImage.html', function(){

			$('.back').click(function(){
				loadMainImagesMenu();
			});
		});

	}

	function navMenu(link,newStr){

		$('#subMenuSection'+newStr).removeClass('hide');
		$('.link'+newStr).addClass('underscore');
		$('#subMenuSection'+newStr).mouseleave(function(){
			$('#subMenuSection'+newStr).addClass('hide');
			$('.link'+newStr).removeClass('underscore');	
		});
	};

	function eliminateText(){
		for (var i=1; i <= 4; i++){
			$("#subMenuSection"+i).addClass("hide");
			$('.link'+i).removeClass('underscore');

		}
	};
}

