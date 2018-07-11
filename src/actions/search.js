import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return (dispatch) => {

    searchYouTube({key: YOUTUBE_API_KEY, query: q}, (items) => {
      dispatch(changeVideo(items[0]))
      dispatch(changeVideoList(items))
    })
  } 
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
