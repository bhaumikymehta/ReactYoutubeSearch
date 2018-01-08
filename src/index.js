import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'Enter your api key here';

//create some component and this will produce some html
class App extends Component{

	constructor(props){
		super(props);


		this.state = {
			videos : [],
			selectedVideo : null
		};
		this.videoSearch('surfboards');
		// this.render();
	}

	videoSearch(term){
		console.log("inside videoSearch:" +term);
		YTSearch({key: API_KEY, term: term}, (videos) => {
			//the below code will only work when  key and value are same variable name
			console.log("videos id:"+videos[0].id.videoId)
			this.setState({
					videos : videos,
					selectedVideo : videos[0]
				});
			console.log("Selected video id:"+this.state.selectedVideo.id.videoId)
		});

	}

	render()  {
		const videoSearch = _.debounce((term) => { this.videoSearch(term)} , 300);

 	   return (
    		<div className="search-bar" >
        		<SearchBar onSearchTermChange = {videoSearch}/>

        		<VideoDetail video= {this.state.selectedVideo} />

        		<VideoList
        			onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
        			videos= {this.state.videos}
        		/>

        	</div>
    	);
	}
}

//take this componnent and genrate html and put in dom
ReactDOM.render( < App / > , document.querySelector('.container'));
