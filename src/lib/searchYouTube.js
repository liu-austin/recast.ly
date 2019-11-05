var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max,
    type: 'video',
    videoEmbeddable: 'true'
  }).done(data => callback(data.items))
    .fail(err => console.log('failed to retrieve data', err));
};

export default searchYouTube;
