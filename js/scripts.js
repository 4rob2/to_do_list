function Task(parameterOne, parameterTwo) {
  this.item = parameterOne;
  this.secondary = parameterTwo;
  this.ready = false;
}


$(document).ready(function() {
  $("#subtask").submit(function(event) {
    event.preventDefault();

    var itemName = $("#items").val();
    var itemName2 = $("#items2").val();
    var newTask = new Task(itemName, itemName2);

    $('#toDoList').append("<li class='toDoItem'><span>" + newTask.item + "</span><br><span class='toDoDescription'>" + newTask.secondary + "</span></li>");

    $('.toDoItem').last().click(function() {
      newTask.ready = !newTask.ready;
      $('.toDoItem').last().toggleClass('finished');

    });
  });
});
