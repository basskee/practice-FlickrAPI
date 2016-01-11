$(document).ready(function(){
	$('button').click(function(){
		//Highlights button when selected
		$("button").removeClass("selected");
		$(this).addClass("selected");
		//Place Ajax within click event 
		var flickrAPI ="http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		//capture the name of the animal we want to return pictures of
		var animal = $(this).text();
		//send JS object data via Query String Paramaters
		var flickrOptions = {
		tags: animal,
		format:"json"
		};
		//callback function using (data) to parse 
		function displayPhotos(data){
			var photoHTML = '<ul>';
			//loop through the photos and create the HTML 
			$.each (data.items, function (i, photo) {
				photoHTML += '<li class="grid-25 tablet-grid-50">';
				photoHTML += '<a href="' + photo.link + ' " class="image">';
				photoHTML += '<img src="' + photo.media.m + '"></a></li>';
			});
			photoHTML +='</ul>';
			$("#photos").html(photoHTML);
		}
		$.getJSON(flickrAPI, flickrOptions,	displayPhotos);
	});	
});//end of doc ready	



//Alternative to above code

//$.getJSON("http://api.flicker.com/services/feeds/photos_public.gne?jsoncallback=?",
//					{
//						tags:animal,
//						format:"json"
//					},
//					function (data){
//					}
//				 
//				 );