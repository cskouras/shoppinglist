$(document).ready(function(){

// enter adds items to list
	$('#item-add').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('.button').click();
		};
	});	

//add list items
	$('.button').click(function(){
		var txtbox = document.getElementById('item-add');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#item-add').val())) {
			alert('Please enter text to add to the list');
		} else {
			$('<div class="items"> </div>').appendTo('#list').html('<div class="box"> <img class="box" src="images/unchecked.png"/></div><img class="xmark" src="images/xmark.png"/><p>' + txtval + '</p>');

		document.getElementById('item-add').value = '';
		};
	});
/* Allows user to delete items*/
	$('#list').on('click', '.xmark', function(e){e.preventDefault(); $(this).parent().remove()});



//cross off list items
	$('#list').on('click', 'img.box', function(){
		$(this).parents('.items').toggleClass('striked');
		$(this).toggleClass('checked'); 
	});
});



    