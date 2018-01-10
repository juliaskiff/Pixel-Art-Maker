const grid = function makeGrid (){


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
	$('#reset_button').on('click', function(){
		$('.cell').css('background-color', 'white');
	});	
};
	
function deleteGrid(){
	$('#delete_button').on('click', function(){
		$('#pixel_canvas').remove(grid());
	})	
};	

grid();
addColor();
clearCell();
deleteGrid();








