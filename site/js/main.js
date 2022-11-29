
import {initializevoteMap} from './vote-map.js';
import {initfileInfoForm, onSuccess} from './loadfile.js';


let voteMap = initializevoteMap();
window.voteMap = voteMap;

let app = {
    currentfile: null,
  };


// `onfileSelected` will be called if and when the user clicks on the button
/*function onbuttonclicked(evt) {
    const voter = evt.detail.voter;
    app.currentfile=voter;
    showvotersInList(voter);
  }*/

  //showvotersInList(onbuttonClicked);

  /*function setupInteractionEvents() {
  window.addEventListener('click',initfileInfoForm());
  };*/
initfileInfoForm();
//setupInteractionEvents();

  window.app = app;