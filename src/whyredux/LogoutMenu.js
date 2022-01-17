function LogoutMenu({ isLoggedIn, login, logout }) {
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
