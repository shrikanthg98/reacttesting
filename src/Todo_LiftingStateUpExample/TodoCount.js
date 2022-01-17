import MotherComponent from "./MotherComponent";

function TodoCount({ todos }) {
	return <div>Total Todos: {todos.length}</div>;
}

export default TodoCount;
