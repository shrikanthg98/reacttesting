import MotherComponent from "./MotherComponent";

function AddTodo({ setTodos }) {
	function handleSubmit(event) {
		event.preventDefault();
		const todo = event.target.elements.todo.value;
		console.log(todo);
		setTodos((prevTodos) => [...prevTodos, todo]);
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" id="todo" />
			<button type="submit">Add Todo</button>
		</form>
	);
}

export default AddTodo;
