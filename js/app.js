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
			$('<div id="items"></div>').appendTo('#list').html('<img class="unchecked" src="images/unchecked.png"/><span>' + txtval + '</span><img class="xmark" src="images/xmark.png"/>');

		document.getElementById('item-add').value = '';
		};
	});
/* Allows user to delete items*/
	$('#list').on('click', '.xmark', function(e){e.preventDefault(); $(this).parent().remove()});


	$('ul').on('click', '.unchecked', function() {
		$(this).closest('.unchecked').toggleClass('.checked');
		$(this).remove();
	});

//cross off list items
	 $('#list').on('click', 'div', function(){
		$(this).toggleClass('striked');
		$(this).children('.unchecked').toggleClass('checked');
	});	
});




    