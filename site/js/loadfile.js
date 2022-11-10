
let voterFileInput = document.querySelector('#list-name-input');
window.voterFileInput = voterFileInput;
let voterFileLoadButton=document.querySelector('#input-button');
window.voterFileLoadButton = voterFileLoadButton;
let voterList = document.querySelector('#file-list');
window.voterList = voterList;

function showvotersInList(voter) {
  const voterinfo = `<li class="list-group-item">[Name:${voter.properties['First Name']}${voter.properties['Middle Name']}${voter.properties['Last Name']}] [Address: ${voter.properties['Line Matched Address']}]</li>`;
  voterList.innerHTML = voterinfo;
}


function onbuttonClicked(onSuccess) {
const number=voterFileInput.value;
const path='../data/voters_lists/' + number + '.csv'; 
const jsonObj = Papa.parse(path,{header:true,skipEmptyLines:true}).jsonObj;
fetch(jsonObj)
    .then(resp => {
      if (resp.status === 200) {
        const data = resp.json();
        return data;
      } 
      else {
        alert('Oh no, I failed to download the data.');
      }
    })
    .then(onSuccess);
}


function initfileInfoForm() {
  voterFileLoadButton.addEventListener('clicked', onbuttonClicked);
}



/*function downloadFile(filedata) { 
  fetch(filedata)
    .then(resp => {
      if (resp.status === 200) {
        const data = resp.json();
        return data;
      } 
      else {
        alert('Oh no, I failed to download the data.');
      }
    });
  }*/

  export{
    initfileInfoForm,
    showvotersInList,
  }