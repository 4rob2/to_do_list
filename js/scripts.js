function Task(item, secondary) {
  this.item = item;
  this.secondary = secondary;
  this.ready = false;
}


$(document).ready(function() {
  $("#subtask").submit(function() {
    var itemName = $("#items").val();
    alert(itemName);
  });
});
