import React, { Component } from 'react';

// const SearchBar= () => {
// 	return <input />;
// };

class SearchBar extends Component{

	constructor(props){
		super(props);

		this.state={term : ''}
	}
	render() {
		//return <input onChange={this.onInputChange}/>
		return (
			<div>
			<input

			value = {this.state.term}
			onChange = { event => this.onInputChange(event.target.value) }
			palceholder = "Enter your search..."
			/>

			</div>
		);
	}
	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}


	//this is event handler to handle the event by funcitons
	// onInputChange(event){
	// 	console.log(event.target.value);
	// }

}

export default SearchBar;
