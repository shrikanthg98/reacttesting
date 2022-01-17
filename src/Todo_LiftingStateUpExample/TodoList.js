import { useState } from "react";
import MotherComponent from "./MotherComponent";

function TodoList({ todos }) {
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo}>{todo}</li>
			))}
		</ul>
	);
}

export default TodoList;
