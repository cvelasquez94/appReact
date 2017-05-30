let id = 0;
module.exports = {
	addToDoList: title => ({
		type: 'ADD_TODO_LIST',
		title,
		id: id++
	}),

		deleteTodoList: (id) => ({
		type: 'DELETE_TODO_LIST',
		id,
	}),

		addTodo: (title,todoListId) => ({
		type: 'ADD_TODO',
		title,
		todoListId
	}),

		removeTodo: (todoListId,todoId) => ({
		type: 'DELETE_TODO',
		todoId,
		todoListId,
		completed: false
	}),

		toggleTodo: (id,todoListId) => ({
		type: 'TOGGLE_TODO',
		id,
		todoListId
	})
}