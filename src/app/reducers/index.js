const todos = (state=[], actions) => {
	switch(actions.type){
		case 'ADD_TODO_LIST':
			return[...state, {
				title: actions.title,
				todos: [],
				completed: false,
				added: new Date(),
				id: actions.id
			}]
		break;
		case 'DELETE_TODO_LIST':
			return state.filter(l => l.id != actions.id)	
		break;
		case 'ADD_TODO':
			return state.map(list => {
				
				return Object.assign({}, 
					list, 
					list.id === actions.todoListId ? {
						todos: [...list.todos,{
							id: actions.id,
							title: actions.title,
							completed: false,
							added: new Date()
						}]

					} : {todos: [...list.todos]}
				);
			});
		break;
		default :
		return state

	}
}

module.exports = todos;