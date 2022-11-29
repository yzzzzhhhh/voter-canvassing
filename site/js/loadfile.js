
let voterFileInput = document.querySelector('#list-name-input');
window.voterFileInput = voterFileInput;
let voterFileLoadButton=document.querySelector('#input-button');
window.voterFileLoadButton = voterFileLoadButton;
let voterList = document.querySelector('#file-list');
window.voterList = voterList;

/*function showvotersInList(voter) {
  const voterinfo = `<li class="list-group-item">[Name:${voter.properties['First Name']}${voter.properties['Middle Name']}${voter.properties['Last Name']}] [Address: ${voter.properties['Line Matched Address']}]</li>`;
  voterList.innerHTML = voterinfo;
}*/





function onbuttonClicked(onSuccess) {
  const number= voterFileInput.value;
  const path='./data/voters_lists/' + number + '.csv';
  const resp = fetch(path).then(resp => {
    if (resp.status === 200) {
      const data = resp.text().then(data => {resp.text
      const jsonObj = Papa.parse(data,{header: true, skipEmptyLines:true})
      onSuccess(jsonObj)
      });  
    
    }
    else {
      alert('Oh no, I failed to download the data.'); 
    }
})}


function onSuccess(data) {
  console.log(data)
}



function initfileInfoForm() {
  voterFileLoadButton.addEventListener('click', function(){ onbuttonClicked(onSuccess) });
}


//
/*
function onbuttonClicked(onSuccess,onFailure) {
  const number=voterFileInput.value;
  const path='./data/voters_lists/' + number + '.csv';
  const resp = fetch(path).then(resp => {
    if (resp.status === 200) {
      const data = resp.text().then(data => {resp.text
      console.log(data)})
    } 
    else {
      alert('Oh no, I failed to download the data.'); 
  }})};

*/


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
  }
  
  {
    if (resp.status === 200) {
      resp.text().then(data = {text.content.csv })
        //const jsonObj = data; //Papa.parse(data,{headertrue,skipEmptyLinestrue}).data;
        //const jsonObj = data; 
        //Papa.parse(data,{headertrue,skipEmptyLinestrue}).data;
        onSuccess(data)
    } else {
      alert('Oh no, I failed to download the data.');
      if (onFailure) { onFailure() }
    }*/

  export {
    initfileInfoForm,
    onSuccess
  }