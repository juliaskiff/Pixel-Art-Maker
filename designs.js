// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {


$('#submit_button').on('click', function(){

	const height = parseInt($('#input_height').val());
	const width = parseInt($('#input_width').val());
	
	for (let i=1; i<=height; i++){
		$('#pixel_canvas').append('<tr></tr>');
		for(let n=1; n<=width; n++){
			$('#pixel_canvas tr:last').append('<td class="cell"></td>');
		};
	};
	return false;
})};

function addColor(){
	$('#colorPicker').on('change', function(){
		let cellColor = $('#colorPicker').val();
		$('.cell').on('click', function(){
			$(this).css('background-color', cellColor);
		});
	});
};

function clearCell (){
	$('#submit_button').on('click', function(){
		$('.cell').css('background-color', 'white');
	});	
};
	
makeGrid();
addColor();
clearCell();









