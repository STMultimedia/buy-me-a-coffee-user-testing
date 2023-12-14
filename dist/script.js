$(document).ready(function() {
	var number = 0;
	$("#next").click(function(){
		$(".slide" + number).slideUp();
		$(".menu" + number).removeClass('current');
		$(".slide" + (number + 1)).slideDown();
		$(".menu" + (number + 1)).addClass('current');

		if (number === 2){
			$("#next").css('transform', 'rotate(180deg)');
		}

		if (number === 3){
			$(".slide3").slideUp();
			$(".menu3").removeClass('current');
			$(".slide0").slideDown();
			$(".menu0").addClass('current');
			$("#next").css('transform', 'rotate(0deg)');

			number = -1;
		}

		number += 1;
	});

	$(".menu0").click(function() {
		$(".slide" + number).slideUp();
		$(".menu" + number).removeClass('current');
		$(".menu0").addClass('current');
		$(".slide0").slideDown();

		number = 0;

		$("#next").css('transform', 'rotate(0deg)');
	});

	$(".menu1").click(function() {
		$(".slide" + number).slideUp();
		$(".menu" + number).removeClass('current');
		$(".menu1").addClass('current');
		$(".slide1").slideDown();

		number = 1;

		$("#next").css('transform', 'rotate(0deg)');
	});

	$(".menu2").click(function() {
		$(".slide" + number).slideUp();
		$(".menu" + number).removeClass('current');
		$(".menu2").addClass('current');
		$(".slide2").slideDown();

		number = 2;

		$("#next").css('transform', 'rotate(0deg)');
	});

	$(".menu3").click(function() {
		$(".slide" + number).slideUp();
		$(".menu" + number).removeClass('current');
		$(".menu3").addClass('current');
		$(".slide3").slideDown();

		number = 3;

		$("#next").css('transform', 'rotate(180deg)');
	});
});

$( document ).ready(function() {

  $('#button-bridge-1').click(() => {
    let b1 = $('#input-bridge-1').val();
    $('#bridge-1-level').html(b1);
    
    
    if (b1 > 20) {
      $('#bridge-1-danger').show();
      $('#bridge-1-warning').hide();
      $('#bridge-1-safe').hide();
    } else if (b1 > 10) {
      $('#bridge-1-danger').hide();
      $('#bridge-1-warning').show();
      $('#bridge-1-safe').hide();
    } else {
      $('#bridge-1-danger').hide();
      $('#bridge-1-warning').hide();
      $('#bridge-1-safe').show();
    }

  });

});