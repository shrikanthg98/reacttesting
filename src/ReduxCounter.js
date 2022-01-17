import { useSelector, useDispatch, useStore } from "react-redux";

const ReduxCounter = () => {
	const dispatch = useDispatch();

	const count = useSelector((state) => state.count);

	const increase = () => {
	dispatch({ type: "increment" });
};

const decrease = () => {
	dispatch({ type: "decrement" });
};
	return (
		<div>
			<h3>The Count is {count}</h3>
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
		</div>
	);
};

export default ReduxCounter;
