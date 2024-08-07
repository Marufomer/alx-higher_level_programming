// adds, removes, and clears <li> elements from a list when the user clicks on the respective DIV elements

$(document).ready(function () {
  $("#add_item").click(function () {
    $("ul.my_list").append("<li>Item</li>");
  });

  $("#remove_item").click(function () {
    $("ul.my_list li:last").remove();
  });

  $("#clear_list").click(function () {
    $("ul.my_list").empty();
  });
});
