// jshint esversion:6
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYoutube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTitle: exampleVideoData[0].snippet.title,
      selectedDescription: exampleVideoData[0].snippet.description,
      selectedUrl: `https://www.youtube.com/embed/${exampleVideoData[0].id.videoId}`,
      selectedSearchTerm: ''
    };
    this.onVideoListClick = this.onVideoListClick.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onVideoListClick(e) {
    this.setState({selectedTitle: e.target.innerHTML});
    var selectedVideo = exampleVideoData.filter(video => {
      return video.snippet.title === e.target.innerHTML;
    });
    this.setState({selectedDescription: selectedVideo[0].snippet.description});
    this.setState({selectedUrl: `https://www.youtube.com/embed/${selectedVideo[0].id.videoId}`});
  }

  onSearchSubmit(e) {
    var input = document.getElementById('form-control');
    this.setState({selectedSearchTerm: input.value});
    // searchYoutube()
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.onSearchSubmit}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={{url: this.state.selectedUrl, title: this.state.selectedTitle, description: this.state.selectedDescription}} />
          </div>
          <div className="col-md-5">
            <VideoList videos={exampleVideoData} onVideoListClick={this.onVideoListClick}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

// onVideoListClick={onVideoListClick}

// Put your YouTube API keys here!
// var YOUTUBE_API_KEY = 'AIzaSyA4cJQP24oJLe7ZYIgVGKDjhHCS7MrINbM';

// export default YOUTUBE_API_KEY;