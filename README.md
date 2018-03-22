# Todo App


1. Ignore the Main.js and Note.js in Components, they were an attempt to make the app without using Redux
2. When run, it will show an error that i'm unable to solve yet (screenshot of error is @ error.png)
3. I followed a Youtube tutorial and typed what they typed (with small changes with the names), it seems to be working for them but not for me

=> So i just wanna check if i'm on the right track? Am i using Redux correctly? What is missing in what I'm doing?

I checked so many examples which are more complicated and doing things differently (especially with dispatching) so i'm pretty confused and not confident with how the implementation is supposed to be.


## Explanation

1. App.js => where Provider and Store lie. TaskManager component is called here because it is the root presentational component. { pls check if it's correct to put the main View under Provider, and if the store declaration is correct }
2. /reducers/taskReducers.js => the store calls this reducer. When ADD_TODO action type is dispatched, it will create new task object.
3. /components/taskManager.js => it has the main View with 2 containers being called: to add task, and to display task list. These containers are mapped to their respective presentational components, therefore when called it will render the respective Views { am i correct? This is what mapping means, right? }
4. /components/AddTask/addTask.js => this is where user inputs new task and changes the state. The state is then passed as prop (onClickAdd) to the container when user clicks the button.
5. /components/AddTask/container/addContainer.js => the container receives user's input (through onClickAdd prop) from the View, then dispatch an action (addNewTask) and saves user's input into the store. { is this way correct? }
6. /components/TaskList/taskList.js => this is to display a list of tasks, using FlatList. The data source is from 'tasks' array and it renders 'taskName' which is user's input, as defined in reducer. It returns TaskItemContainer that is mapped to TaskItem.js with View that displays the individual task. { other examples all use ListView instead of FlatList, but not necessary right? }

