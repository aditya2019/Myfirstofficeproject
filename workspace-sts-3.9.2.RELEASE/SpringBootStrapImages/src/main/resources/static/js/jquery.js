$( document ).ready(function() {
	$("#roundedCornersBtn").on( "click", function() {
		  $("#jsaAboutImageId").removeClass().addClass('img-rounded img-responsive');
	});
	
	$("#circleBtn").on( "click", function() {
		  $("#jsaAboutImageId").removeClass().addClass('img-circle img-responsive');
	});
	
	$("#thumbnailBtn").on( "click", function() {
		  $("#jsaAboutImageId").removeClass().addClass('img-thumbnail img-responsive');
	});
}