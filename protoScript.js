//Social Media Links
$(document).ready(function(){
    $("#hide").click(function(){
        $("#toShow").fadeOut(800);
		$("#toHide").fadeIn(800);
		//$("#toHide").delay(800).fadeIn(0);
    });
	$("#show").click(function(){
        $("#toShow").fadeIn(800);
		$("#toHide").fadeOut(800);
    });
});