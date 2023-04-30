let arrOfKeys = [
  [{"eventCode" : "Backquote" , "dataKey" : '192', "value" : '`'},
   {"eventCode" : "Digit1", "dataKey" : '49', "value" : '1'},
   {"eventCode" : "Digit2", "dataKey" : '50', "value" : '2'},
   {"eventCode" : "Digit3", "dataKey" : '51', "value" : '3'},
   {"eventCode" : "Digit4", "dataKey" : '52', "value" : '4'},
   {"eventCode" : "Digit5", "dataKey" : '53', "value" : '5'},
   {"eventCode" : "Digit6", "dataKey" : '54', "value" : '6'},
   {"eventCode" : "Digit7", "dataKey" : '55', "value" : '7'},
   {"eventCode" : "Digit8", "dataKey" : '56', "value" : '8'},
   {"eventCode" : "Digit9", "dataKey" : '57', "value" : '9'},
   {"eventCode" : "Digit0", "dataKey" : '48', "value" : '0'},
   {"eventCode" : "Minus",  "dataKey" : '189', "value" : '-'},
   {"eventCode" : "Equal",  "dataKey" : '187', "value" : '='},
   {"eventCode" : "Backspace", "dataKey" : '8', "value" : 'Backspace',  "isFunctional" : 'true'}],
  [],
  [],
  [],
  [],
];

function renderTextArea(){
  const inputField = document.createElement("textarea");
  inputField.className = "textarea";
  inputField.setAttribute("rows" , "15");
  document.body.appendChild(inputField);
}

function renderKeyBoard() {
  const keyBoardField = document.createElement("div");
  keyBoardField.className = "keyboard";
  document.body.appendChild(keyBoardField)
}


arrOfKeys.forEach(function(item, index) {
  let Key = document.createElement("div");
  // Key.setAttribute("type" , "button");
  Key.classList.add("keyboard__key")
})

// let keyName = 

document.addEventListener('keydown', (event)  => {
  if (event.code == 2) {

  }
})
function pressedKeyHandler(item) {
  if (keyboard__key.classList.contains('active')) {
  keyboard__key.classList.toggle('active')
  }
}

renderTextArea();
renderKeyBoard()