$(function(){

var state = {
  items: []
};

function createListItem(newItem){
	var listItem= '<li>' + '<span class="shopping-item">' + newItem + '</span>' + '<div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' +
        '<span class="button-label">check</span>' + '</button>' + '<button class="shopping-item-delete">' + '<span class="button-label">delete</span>' + '</button>' + '</div>' + '</li>';
        return listItem;
}




//Event listeners
$('#js-shopping-list-form').submit(function(event){
	event.preventDefault();
	var newItem = $("#shopping-list-entry").val();
	var listItem = createListItem(newItem);
	$('.shopping-list').append(listItem)

})


$('.shopping-list').on('click', '.shopping-item-delete', function(event){
	event.preventDefault();
	var listItem = $(this).closest("li");
	listItem.remove();
})

$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
	event.preventDefault();
	$(this).closest("li").toggleClass("shopping-item__checked")
})

})

