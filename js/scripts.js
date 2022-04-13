//This is business logic.//


//This is user interface logic.//
$(document).ready(function() {
  $("form#select-recipes").submit(function(event) {
    event.preventDefault();
    $("#grocery-list").show();
    $("input:checkbox[name=recipe-options]:checked").each(function() {
      const groceryList = $(this).val();
      $('#grocery-list').append(groceryList + "<br>");
    });
    $('#select-recipes').hide();
  });

});
