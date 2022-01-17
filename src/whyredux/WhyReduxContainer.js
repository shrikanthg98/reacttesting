import React from "react";
import LogoutMenu from "./LogoutMenu";
import MainMenu from "./MainMenu";

function WhyReduxContainer() {
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);

	const login = () => {
		setIsLoggedIn(true);
	};

	const logout = () => {
		setIsLoggedIn(false);
	};

	return (
		<div>
			<MainMenu isLoggedIn={isLoggedIn} />
			<LogoutMenu login={login} logout={logout} isLoggedIn={isLoggedIn} />
		</div>
	);
}

export default WhyReduxContainer;
