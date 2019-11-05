// jshint esversion:6
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYoutube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0],
      selectedSearchTerm: ''
    };
    this.onVideoListClick = this.onVideoListClick.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.setVideos = this.setVideos.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onVideoListClick(e) {
    var selectedVideo = this.state.videos.filter(video => {
      return video.snippet.title === e.target.innerHTML;
    });
    console.log(selectedVideo);
    this.setState({ video: selectedVideo[0] });
  }

  onSearchSubmit(event) {
    // event.preventDefault();
    // event.stopPropagation();
    var input = document.getElementById('form-control');
    // this.setState({ selectedSearchTerm: input.value }, function() {
    // });
    input.value = '';
    searchYoutube({query: this.state.selectedSearchTerm, max: 5, key: YOUTUBE_API_KEY}, updatedVideos => this.setVideos(updatedVideos));
  }

  handleChange(event) {
    this.setState({selectedSearchTerm: event.target.value});
  }

  setVideos(videosList) {
    this.setState({videos: videosList});
    console.log(this.state.videos);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search change={this.handleChange} search={this.onSearchSubmit} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onVideoListClick={this.onVideoListClick} />
          </div>
        </div>
      </div >
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
