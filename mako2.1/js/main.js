$(document).ready(main);

function main(){
	$.getScript("js/timer.js");
	$(".menuLoad").load("screens/index.html", function(){		
		$(".imageMe").removeClass("imageAbout");
		setTimeout(function(){info()}, 6000);
		startTime();
		

		//Buttons Behavior
		$(".circleButton").click(function(){info();});
		$(".info").click(function(){info();});
	
		//Buttons Behavior

	});
}

//CSS Behavior
function opacity(id){
	
	function opt() {
		$(".menuLoad").removeClass("fadeAnimation");
		$(".phoneDiv").addClass("fadeIn");
		$(".mainAbout").addClass("fadeInFast");

      	}		
     return opt();		
}
//End CSS Behavior


//Closures 
function info(){
	function infoChange(){
		$(".menuLoad").addClass("fadeAnimation");
		$(".menuLoad").load("screens/main.html", function(){
			$(".phone").click(function(){				
				$(".menuLoad").load("screens/phone.html", function(){
				opacity(this.id)
				});
			});	
			$(".kirito").click(function(){	
				$(".menuLoad").addClass("fadeAnimation");			
				$(".menuLoad").load("screens/aboutMe.html", function(){
				opacity(this.id);
					$(".backAbout").click(function(){
						info();		
					});
				});
			});	
			$(".skills").click(function(){	
				$(".menuLoad").addClass("fadeAnimation");			
				$(".menuLoad").load("screens/skills.html", function(){
				opacity(this.id);
				actionsSkills();
					$(".backAbout").click(function(){
						info();		
					});
				});
			});	
			$(".works").click(function(){	
				$(".menuLoad").addClass("fadeAnimation");			
				$(".menuLoad").load("screens/works.html", function(){
				opacity(this.id);
				actionsWorks();
					$(".backAbout").click(function(){
						info();		
					});
				});
			});	


		});
	};
	return infoChange();
};	

function actionsSkills(){
	function actSkills(){
			$(".JS").hover(function(){
			$(".textSection").addClass("fadeIn"); 
			$("#javascript").addClass("block");
			$("#html").removeClass("block");
			$("#css3").removeClass("block");
			$("#php").removeClass("block");
		});


		$(".HTML5").hover(function(){
			$("#html").addClass("block");
			$(".textSection").addClass("fadeIn"); 
			$("#javascript").removeClass("block");
			$("#css3").removeClass("block");
			$("#php").removeClass("block");
		});

		$(".CSS3").hover(function(){
			$(".textSection").addClass("fadeIn"); 
			$("#css3").addClass("block");
			$("#javascript").removeClass("block");
			$("#html").removeClass("block");
			$("#php").removeClass("block");
		});

		$(".PHP").hover(function(){
			$(".textSection").addClass("fadeIn"); 
			$("#php").addClass("block");
			$("#javascript").removeClass("block");
			$("#css3").removeClass("block");
			$("#html").removeClass("block");
		});
	}
	return actSkills();
}

function actionsWorks(){

	function actWorks(){
		$("#onlinestore").click(function(){
			var url = "http://www.makoreacto7.net/onlinestore";
        window.open(url, '_blank');
		});
		$("#mobilefirst").click(function(){
			var url = "http://www.makoreacto7.net/mobilefirst";
        window.open(url, "_blank", "width=357, height=600");
		});
	}
	return actWorks();
}

//End Closures


var post = $.ajax({
    url: "/echo/json/",
    data: {json: JSON.stringify({firstName: "Jose", lastName: "Romaniello"})} ,
    type: "POST"
});

post.done(function(p){
    alert(p.firstName +  " saved.");
});

post.fail(function(){
    alert("error!");
});













