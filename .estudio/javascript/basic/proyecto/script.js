const { Console } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

taskList = [];

function addTask(taskList, task) {
  taskList.push({
    done: false,
    description: task,
  });
}

function printTasks(taskList) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].done) {
      console.log(`${i + 1}. [x] ${taskList[i].description}`);
    } else {
      console.log(`${i + 1}. [ ] ${taskList[i].description}`);
    }
  }
}

function markTaskAsDone(taskList, index) {
  if (index >= 0 && index < taskList.length) {
    taskList[index].done = true;
  } else {
    console.log("Numero no valido");
  }
}

function checkAllDone(taskList) {
  for (task of taskList) {
    if (!task.done) return false;
  }
  return true;
}

function mode2(taskList) {
  printTasks(taskList);

  rl.question("Realizar Tarea (1 - N): ", function (taskNumber) {
    switch (taskNumber) {
      case "fin":
      case "exit":
        console.log("saliendo del programa...");
        rl.close();
        break;
      default:
        markTaskAsDone(taskList, taskNumber - 1);

        if (checkAllDone(taskList)) {
          console.log("Muy bien el trabajo esta completo");
          rl.close();
        } else {
          mode2(taskList);
        }
    }
  });
}

function mode1(taskList) {
  rl.question("Introduce nueva tarea (fin si terminas): ", function (answer) {
    switch (answer) {
      case "fin":
        mode2(taskList);
        break;
      case "exit":
        rl.close();
        break;
      default:
        addTask(taskList, answer);
        printTasks(taskList);
        mode1(taskList);
        break;
    }
  });
}

mode1(taskList);
