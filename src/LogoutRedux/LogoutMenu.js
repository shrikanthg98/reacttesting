import { useSelector, useDispatch } from "react-redux";

function LogoutMenu() {

	const isLoggedIn = useSelector((state) => state.isLoggedIn);;

	const dispatch = useDispatch();

	const login = () => {
		dispatch({ type: "login" });
	};

	const logout = () => {
		dispatch({ type: "logout" });
	};

	return (
		<div>
			{isLoggedIn ? (
				<div>You are logged in</div>
			) : (
				<div>You are not logged in</div>
			)}
			<button onClick={login}>Login</button>
			<button onClick={logout}>Logout</button>
		</div>
	);
}

export default LogoutMenu;
