import TodoList from './todoList';
import AddTodoItem from './addTodoItem';

function loadTodoList() {
	let todoList = new TodoList([{
		label: 'Este es mi item 1',
		checked: false,
		id: 1
	},
	{
		label: 'Este es mi item 2',
		checked: true,
		id: 2
	}]);

	$('.todo-list').append(todoList.$component);
}

loadTodoList();