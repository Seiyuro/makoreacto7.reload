$(document).ready(main);

function main() {	

		$(".smell_like").click(function(){
			$("#mainImage").attr("src","img/logos/nirvana_logo.jpg");
			$(".author").html("Nirvana");
			$(".name").html("Smell Like Teen Spirit");
			function addSource(elem, path) {
		    $('<source>').attr('src', path).appendTo(elem);
			}
			var singleAudio = $('<audio>', 
		    {
		    	autoPlay : 'autoplay',
		    	controls : 'controls', 
		    	id: 		'track'
		    });
			addSource(singleAudio, 'music/smell_like.mp3');		
			$("#audioControl").html(singleAudio);

		});

		$(".wind_of").click(function(){
			$("#mainImage").attr("src","img/logos/scorpions_logo.jpg");
			$(".author").html("Scorpions");
			$(".name").html("Wings of Change");
			
			function addSource(elem, path) {
		    $('<source>').attr('src', path).appendTo(elem);
			}
			var singleAudio = $('<audio>', 
		    {
		    	autoPlay : 'autoplay',
		    	controls : 'controls', 
		    	id: 		'track'
		    });
			addSource(singleAudio, 'music/wind_of.mp3');		
			$("#audioControl").html(singleAudio);
		});

		$(".rock_dead").click(function(){
			$(".author").html("Marylin Manson");
			$(".name").html("The Rock is Dead");
			
			$("#mainImage").attr("src","img/logos/marilyn_logo.jpg");
			function addSource(elem, path) {
		    $('<source>').attr('src', path).appendTo(elem);
			}
			var singleAudio = $('<audio>', 
		    {
		    	autoPlay : 'autoplay',
		    	controls : 'controls', 
		    	id: 		'track'
		    });
			addSource(singleAudio, 'music/rock_dead.mp3');		
			$("#audioControl").html(singleAudio);
		});


		$(".smooth").click(function(){
			$(".author").html("Carlos Santana");
			$(".name").html("Smooth");
			
			$("#mainImage").attr("src","img/logos/santana_logo.jpg");
			function addSource(elem, path) {
		    $('<source>').attr('src', path).appendTo(elem);
			}
			var singleAudio = $('<audio>', 
		    {
		    	autoPlay : 'autoplay',
		    	controls : 'controls', 
		    	id: 		'track'
		    });
			addSource(singleAudio, 'music/smooth.mp3');		
			$("#audioControl").html(singleAudio);
		});


		$(".crazy").click(function(){
			$(".author").html("Aerosmith");
			$(".name").html("Crazy");
			
			$("#mainImage").attr("src","img/logos/aerosmith_logo.jpg");
			function addSource(elem, path) {
		    $('<source>').attr('src', path).appendTo(elem);
			}
			var singleAudio = $('<audio>', 
		    {
		    	autoPlay : 'autoplay',
		    	controls : 'controls', 
		    	id: 		'track'
		    });
			addSource(singleAudio, 'music/crazy.mp3');		
			$("#audioControl").html(singleAudio);
		});

		$(".nothing").click(function(){
			$(".author").html("Metallica");
			$(".name").html("Nothing Else Matters");
			
			$("#mainImage").attr("src","img/logos/metallica_logo.jpg");
			function addSource(elem, path) {
		    $('<source>').attr('src', path).appendTo(elem);
			}
			var singleAudio = $('<audio>', 
		    {
		    	autoPlay : 'autoplay',
		    	controls : 'controls', 
		    	id: 		'track'
		    });
			addSource(singleAudio, 'music/nothing.mp3');		
			$("#audioControl").html(singleAudio);
		});
}




