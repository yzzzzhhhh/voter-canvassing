
import {initializevoteMap} from './vote-map.js';
import {initfileInfoForm,showvotersInList} from './loadfile.js';


let voteMap = initializevoteMap();
window.voteMap = voteMap;

let app = {
    currentfile: null,
  };


// `onfileSelected` will be called if and when the user clicks on the button
function onbuttonclicked(evt) {
    const voter = evt.detail.voter;
    app.currentfile=voter;
    showvotersInList(voter);
  }

  function setupInteractionEvents() {
  window.addEventListener('clicked', onbuttonclicked);
  }
initfileInfoForm();
setupInteractionEvents();

  window.app = app;