import React, { Component } from "react";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";
import "./app.css";
import Habits from "./components/habits";
import Nav from "./components/nav";
import HabitAddForm from "./components/habitAddForm";
import Habit from "./components/habit";

class App extends Component {
	state = {
		habits: [
			{ id: 1, name: "Reading", count: 0 },
			{ id: 2, name: "Running", count: 0 },
			{ id: 3, name: "Coding", count: 0 },
		],
	};

	handleIncrement = (habit) => {
		const habits = this.state.habits.map((item) => {
			if (item.id === habit.id) {
				return { ...habit, count: habit.count + 1 };
			}
			return item;
		});
		this.setState({ habits });
	};

	handleDecrement = (habit) => {
		const habits = this.state.habits.map((item) => {
			if (item.id === habit.id) {
				const count = habit.count - 1;
				return { ...habit, count: count < 0 ? 0 : count };
			}
			return item;
		});
		this.setState({ habits });
	};

	handleDelete = (habit) => {
		const habits = this.state.habits.filter((item) => item.id !== habit.id);
		this.setState({ habits });
	};

	handleAdd = (name) => {
		const habits = [...this.state.habits];
		habits.push({
			id: Date.now(),
			name: name,
			count: 0,
		});
		this.setState({ habits });
		console.log(habits);
	};

	onReset = () => {
		const habits = this.state.habits.map((item) => {
			if (item.count !== 0) {
				return { ...item, count: 0 };
			}
			return item;
		});
		this.setState({ habits });
	};

	render() {
		return (
			<div>
				<Nav habitIng={this.state.habits.filter((item) => item.count > 0)} />
				<HabitAddForm onAdd={this.handleAdd} />
				<Habits
					habits={this.state.habits}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onDelete={this.handleDelete}
				/>
				<button className="resetBtn" onClick={this.onReset}>
					Reset All
				</button>
			</div>
		);
	}
}
export default App;
