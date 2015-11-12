/*functions to add:

  **task-checkers** - these functions should get the current time, compare that to
  the last time a specific task was completed and calculate when the task should
  be completed next. The checkAllTasks function should probably be triggered regularly.
  The more specific sub-tasks should be invoked by checkAllTasks();

    checkAllTasks() - update all tasks for all pets (run this on launch)
      checkPetTasks() - update tasks for a particular pet
        checkTask() - update a particular task
    */

//Pet class. Contains an array of tasks and related methods.
function Pet(name){
  this.name = name;
  this.amountTasks = 0;
  this.tasks = new Array();
  this.addTask = function(task){
    this.tasks[tasks.length] = new Task(task);
    this.amountTasks++;
  };
  this.removeTask = function(taskIndex){
    this.tasks.splice(taskIndex, 1);
  };
  this.checkPetTasks = function(currentTime){
    for (i=0;i<amountTasks;i++){
      this.tasks[i].checkTask(currentTime);
    };
  };
}

/* Class for pet tasks. Constructor takes name, type, frequency and frequencyMode
of task. Type is held to determine what the QuickFeed/QuickTask button does when
set. Frequency should be stored as X per frequencyMode which can be something
like 'daily', 'weekly', 'monthly', etc. Setup view for new tasks should provide
all of these parameters. */
function Task(name) {
  this.name = name;
  this.timetest = 0;
  //this.frequency = frequency;
  /* convert frequencyMode into something meaningful to calculate when things
  need to be done
  switch (frequencyMode) {
    case "daily":
      this.frequencyMode: 24;
      break;

    case "weekly":
      this.frequencyMode: 24*7;
      break;
    default:

  };*/
  this.checkTask = function(currentTime) {
    this.timetest = currentTime;
  };
  /*Types should be 'feed', 'meds' and 'custom'. We could add more types if
  there are other tasks that we consider to be essential. */
  this.type = type;
  /* lastTimeCompleted should be replaced with an (un)formatted? version of the
  current time the first time the Task is marked as complete. */
  this.lastTimeCompleted = "Never";
  this.completeTask = function(currentTime){
    this.lastTimeCompleted = currentTime;
    this.checkTask(currentTime);
  };
}

//array of pet objects that contain task objects
var pets = new Array();
pets[0] = new Pet("fluffy");
pets[0].addTask("feed");
pets[0].addTask("feed2");
pets[1] = new Pet("dipper");
pets[0].addTask("feed");

console.log(pets[0].name);
console.log(pets[0].tasks[0].name);
