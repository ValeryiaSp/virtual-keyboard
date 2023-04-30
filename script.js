let arrOfKeys = [
  [
    { "eventCode": "Backquote", "dataKey": '192', "value": '`' },
    { "eventCode": "Digit1", "dataKey": '49', "value": '1' },
    { "eventCode": "Digit2", "dataKey": '50', "value": '2' },
    { "eventCode": "Digit3", "dataKey": '51', "value": '3' },
    { "eventCode": "Digit4", "dataKey": '52', "value": '4' },
    { "eventCode": "Digit5", "dataKey": '53', "value": '5' },
    { "eventCode": "Digit6", "dataKey": '54', "value": '6' },
    { "eventCode": "Digit7", "dataKey": '55', "value": '7' },
    { "eventCode": "Digit8", "dataKey": '56', "value": '8' },
    { "eventCode": "Digit9", "dataKey": '57', "value": '9' },
    { "eventCode": "Digit0", "dataKey": '48', "value": '0' },
    { "eventCode": "Minus", "dataKey": '189', "value": '-' },
    { "eventCode": "Equal", "dataKey": '187', "value": '=' },
    { "eventCode": "Backspace", "dataKey": '8', "value": 'Backspace', "isFunctional": 'true' }],

  [
    { "eventCode": "Tab", "dataKey": '9', "value": 'Tab' },
    { "eventCode": "KeyQ", "dataKey": '81', "value": 'q' },
    { "eventCode": "KeyW", "dataKey": '87', "value": 'w' },
    { "eventCode": "KeyE", "dataKey": '69', "value": 'e' },
    { "eventCode": "KeyR", "dataKey": '82', "value": 'r' },
    { "eventCode": "KeyT", "dataKey": '84', "value": 't' },
    { "eventCode": "KeyY", "dataKey": '192', "value": 'y' },
    { "eventCode": "KeyU", "dataKey": '192', "value": 'u' },
    { "eventCode": "KeyI", "dataKey": '192', "value": 'i' },
    { "eventCode": "KeyO", "dataKey": '192', "value": 'o' },
    { "eventCode": "KeyO", "dataKey": '192', "value": 'p' },
    { "eventCode": "KeyP", "dataKey": '192', "value": '[' },
    { "eventCode": "BracketLeft", "dataKey": '192', "value": ']' },
    { "eventCode": "BracketRight", "dataKey": '192', "value": '\\' },
    { "eventCode": "Backslash", "dataKey": '192', "value": 'Del' },
  ],
  [],
  [],
  [],
];

function renderTextArea() {
  const inputField = document.createElement("textarea");
  inputField.className = "textarea";
  inputField.setAttribute("rows", "15");
  document.body.appendChild(inputField);
};

function keyboardKeyClickHandler(event) {
  event.target.classList.toggle('keyboard__key--pressed')

}

function prepareKeyboardRow(row) {
  const rowEl = document.createElement("div");
  rowEl.classList.add("keyboard__row");

  row.forEach(item => {
    const keyEl = document.createElement("div");
    keyEl.classList.add("keyboard__key");

    keyEl.innerText = item.value;
    keyEl.setAttribute("data-code", item.eventCode);
    keyEl.addEventListener('mousedown', event => keyboardKeyClickHandler(event));
    keyEl.addEventListener('mouseup', event => keyboardKeyClickHandler(event))

    rowEl.appendChild(keyEl);
  })

  return rowEl;
}

function keyEventHandler(event) {
  if (event.repeat) {
    return
  }

  const targetEl = document.querySelector(`div[data-code="${event.code}"]`);
  if (targetEl) {
    targetEl.classList.toggle('keyboard__key--pressed')
  }
}

function renderKeyboard() {
  const keyboardEl = document.createElement("div");
  keyboardEl.className = "keyboard";


  arrOfKeys.forEach(row => {
    keyboardEl.appendChild(prepareKeyboardRow(row));

  })
  document.body.appendChild(keyboardEl);

  document.addEventListener('keydown', (event) => keyEventHandler(event))
  document.addEventListener('keyup', (event) => keyEventHandler(event))

}


renderTextArea();
renderKeyboard()