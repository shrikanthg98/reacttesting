import { Component } from "react";
import "./App.css"

class Testing extends Component {
	constructor() {
		super();

		this.state = {
			term: "",
			title: "roses are red",
			count:0
		};

		this.displayText = this.displayText.bind(this);
		this.increaseCount = this.increaseCount.bind(this);
		this.decreaseCount = this.decreaseCount.bind(this);
		this.resetCount = this.resetCount.bind(this);
	}

	displayText(event) {
		event.preventDefault();
		let textVal = event.target.inputText.value;
		console.log(textVal);
		this.setState({ term: textVal });
		this.setState({title:"violets are blue"})
	}

	increaseCount(){
		this.setState({count: this.state.count + 1});
	}

	decreaseCount(){
		this.setState({count: this.state.count - 1});
	}

	resetCount(){
		this.setState({count: 0});
	}

	render() {
		return (
			<div className="Default">
			<h1>Display Text</h1>
				<form onSubmit={this.displayText}>
					<input
						type="text"
						name="inputText"
						placeholder="Enter Text"
					/>
					<button>Display Text</button>
				</form>
				<br />
				{this.state.title}<br />
				Text : <strong>{this.state.term}</strong>
			<div>
			<h1>Counter</h1>
			<h3>{this.state.count}</h3>
			<button onClick={this.increaseCount}>Increase</button>
			<button onClick={this.decreaseCount}>Decrease</button>
			<button onClick={this.resetCount}>Reset</button>
			</div>
			</div>
		);
	}
}

export default Testing;
