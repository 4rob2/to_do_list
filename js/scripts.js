function Task(item, secondary) {
  this.item = item;
  this.secondary = secondary;
  this.ready = false;
}


$(document).ready(function() {
  $("#subtask").submit(function(event) {
    event.preventDefault();

    var itemName = $("#items").val();
    var itemName2 = $("#items2").val();
    var newTask = new Task(itemName, itemName2);

    $('#toDoList').append("<li>" + newTask.item + "</li>");
  });
});
