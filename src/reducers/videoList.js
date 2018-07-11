import Redux from 'redux';

var sampleData = [];

var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  // if (action.type === "CHANGE_VIDEO_LIST") {
  //   return action.videos
  // }
  
  // return state;

  switch (action.type) {
    case 'CHANGE_VIDEO_LIST' :
      return action.videos
    default:
      return state
  }
};

export default videoListReducer;
