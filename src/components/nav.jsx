import React, { PureComponent } from "react";

class Nav extends PureComponent {
	render() {
		console.log("yaya");
		const habitCount = this.props.habitIng.length;
		return (
			<nav className="nav">
				<span className="logo">
					<i className="fas fa-leaf"></i>
				</span>
				<span className="title">Habit Tracker</span>
				<span className="nav-count">{habitCount}</span>
			</nav>
		);
	}
}

export default Nav;
