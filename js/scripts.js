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

    $('#toDoList').append("<li class='toDoItem'><input type='checkbox'><span>" + newTask.item + "</span></li><br><span class='toDoDescription'>" + newTask.secondary + "</span>");

    $('.toDoItem').last().click(function() {
      // toggle the done or not
      alert("Your click event handler works!");
    });
  });
});
