describe("Task", function() {
  it("create a task with the correct properties", function() {
    var testTask = new Task("studying", "math");
    expect(testTask.item).to.equal("studying");
    expect(testTask.secondary).to.equal("math");
    expect(testTask.ready).to.equal(false);
  });
});
