var searchYouTube = (options, callback) => {
  // TODO
//   $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     query: options.q,
//       max: options.maxResults,
//         key: options.key,
//   }, callback)
//
};

export default searchYouTube;


// readAll: function(successCB, errorCB = null) {
//   $.ajax({
//     url: "https://www.googleapis.com/youtube/v3/search",
//     type: 'GET',
//     data: { query: '-createdAt' },
//     contentType: 'application/json',
//     success: successCB,
//     error: errorCB || function(error) {
//       console.error('chatterbox: Failed to fetch messages', error);
//     }
//   });
// }

// $.get("https://www.googleapis.com/youtube/v3/channels", {
//     part: "contentDetails",
//     $("#subtype").val(): $("#url").val(),
//     key: "MY-API-KEY"
// }, callback())