const createStore = require('redux').createStore;
const actions = require('./actions');
const reducers = require('./reducers');

const store = createStore(reducers);

store.subscribe(() => console.log(store.getState()));
store.dispatch(actions.addToDoList('my list'));
store.dispatch(actions.addToDoList('my list 2'));
store.dispatch(actions.deleteTodoList(0));
store.dispatch(actions.addTodo('my firts task', 1));
store.dispatch(actions.removeTodo(5, 2));
store.dispatch(actions.addTodo('my second task', 2));
store.dispatch(actions.toggleTodo(3, 1));