import React from 'react';


const VideoDetail = ({video}) =>{
	console.log("f:"+video);
	if(!video){
		console.log("inside if");
		return <div>Loading...</div>;
	};

	console.log('outside if:'+video);
	const videoId= video.id.videoId;
	console.log(videoId);

	//below is old way of modifying url
	// const url='https://www.youtube.com/embed/' + videoId;

	//this is es6 new way of modifying string
	const url=`https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item"  src={url}></iframe>
			</div>
			<div className="detail">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>

	);
};

export default VideoDetail;
