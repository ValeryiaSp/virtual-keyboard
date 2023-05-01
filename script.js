let arrOfKeys = [
  [
    { "eventCode": "Backquote", "caseDown": '`', caseUp : '~', caps : '`', shiftCaps: '~', caseDownAlt : 'ё', caseUpAlt: 'Ё', capsAlt : 'Ё', shiftCapsAlt : 'ё'},
    { "eventCode": "Digit1", "caseDown": '1', caseUp : '!', caps : '1', shiftCaps: '!', caseDownAlt : '1', caseUpAlt: '!', capsAlt : '1', shiftCapsAlt : '!'},
    { "eventCode": "Digit2", "caseDown": '2', caseUp : '@', caps : '2', shiftCaps: '@', caseDownAlt : '2', caseUpAlt: '"', capsAlt : '2', shiftCapsAlt : '"'},
    { "eventCode": "Digit3", "caseDown": '3', caseUp : '#', caps : '3', shiftCaps: '#', caseDownAlt : '3', caseUpAlt: '№', capsAlt : '3', shiftCapsAlt : '№'},
    { "eventCode": "Digit4", "caseDown": '4', caseUp : '$', caps : '4', shiftCaps: '$', caseDownAlt : '4', caseUpAlt: ';', capsAlt : '4', shiftCapsAlt : ';'},
    { "eventCode": "Digit5", "caseDown": '5', caseUp : '%', caps : '5', shiftCaps: '%', caseDownAlt : '5', caseUpAlt: '%', capsAlt : '5', shiftCapsAlt : '%'},
    { "eventCode": "Digit6", "caseDown": '6', caseUp : '^', caps : '6', shiftCaps: '^', caseDownAlt : '6', caseUpAlt: ':', capsAlt : '6', shiftCapsAlt : ':'},
    { "eventCode": "Digit7", "caseDown": '7', caseUp : '&', caps : '7', shiftCaps: '&', caseDownAlt : '7', caseUpAlt: '?', capsAlt : '7', shiftCapsAlt : '?'},
    { "eventCode": "Digit8", "caseDown": '8', caseUp : '*', caps : '8', shiftCaps: '*', caseDownAlt : '8', caseUpAlt: '*', capsAlt : '8', shiftCapsAlt : '*'},
    { "eventCode": "Digit9", "caseDown": '9', caseUp : '(', caps : '9', shiftCaps: '(', caseDownAlt : '9', caseUpAlt: '(', capsAlt : '9', shiftCapsAlt : '('},
    { "eventCode": "Digit0", "caseDown": '0', caseUp : ')', caps : '0', shiftCaps: ')', caseDownAlt : '0', caseUpAlt: ')', capsAlt : '0', shiftCapsAlt : ')'},
    { "eventCode": "Minus", "caseDown": '-', caseUp : '_', caps : '-', shiftCaps: '_', caseDownAlt : '-', caseUpAlt: '_', capsAlt : '-', shiftCapsAlt : '_'},
    { "eventCode": "Equal", "caseDown": '=', caseUp : '+', caps : '=', shiftCaps: '+', caseDownAlt : '=', caseUpAlt: '+', capsAlt : '=', shiftCapsAlt : '+'},
    { "eventCode": "Backspace", "value": 'Backspace', "isFunctional": 'true' }],

    [
      { "eventCode": "Tab", "value": 'Tab', "isFunctional": 'true' },
      { "eventCode": "KeyQ", "caseDown": 'q', caseUp : 'Q', caps : 'Q', shiftCaps: 'q', "caseDownAlt" : 'й',"caseUpAlt" : 'Й', "capsAlt" : 'Й', "shiftCapsAlt": 'й'},
      { "eventCode": "KeyW", "caseDown": 'w', caseUp : 'W', caps : 'W', shiftCaps: 'w', "caseDownAlt" : 'ц',"caseUpAlt" : 'Ц', "capsAlt" : 'Ц', "shiftCapsAlt": 'ц'},
      { "eventCode": "KeyE", "caseDown": 'e', caseUp : 'E', caps : 'E', shiftCaps: 'e', "caseDownAlt" : 'у',"caseUpAlt" : 'У', "capsAlt" : 'У', "shiftCapsAlt": 'У'},
      { "eventCode": "KeyR", "caseDown": 'r', caseUp : 'R', caps : 'R', shiftCaps: 'r', "caseDownAlt" : 'к',"caseUpAlt" : 'К', "capsAlt" : 'К', "shiftCapsAlt": 'к'},
      { "eventCode": "KeyT", "caseDown": 't', caseUp : 'T', caps : 'T', shiftCaps: 't', "caseDownAlt" : 'е',"caseUpAlt" : 'Е', "capsAlt" : 'Е', "shiftCapsAlt": 'е'},
      { "eventCode": "KeyY", "caseDown": 'y', caseUp : 'Y', caps : 'Y', shiftCaps: 'y', "caseDownAlt" : 'н',"caseUpAlt" : 'Н', "capsAlt" : 'Н', "shiftCapsAlt": 'н'},
      { "eventCode": "KeyU", "caseDown": 'u', caseUp : 'U', caps : 'U', shiftCaps: 'u', "caseDownAlt" : 'г',"caseUpAlt" : 'Г', "capsAlt" : 'Г', "shiftCapsAlt": 'г'},
      { "eventCode": "KeyI", "caseDown": 'i', caseUp : 'I', caps : 'I', shiftCaps: 'i', "caseDownAlt" : 'ш',"caseUpAlt" : 'Ш', "capsAlt" : 'Ш', "shiftCapsAlt": 'ш'},
      { "eventCode": "KeyO", "caseDown": 'o', caseUp : 'O', caps : 'O', shiftCaps: 'o', "caseDownAlt" : 'щ',"caseUpAlt" : 'Щ', "capsAlt" : 'Щ', "shiftCapsAlt": 'щ'},
      { "eventCode": "KeyP", "caseDown": 'p', caseUp : 'P', caps : 'P', shiftCaps: 'p', "caseDownAlt" : 'з',"caseUpAlt" : 'З', "capsAlt" : 'З', "shiftCapsAlt": 'з'},
      { "eventCode": "BracketLeft", "caseDown": '[', caseUp : '{', caps : '[', shiftCaps: '{', "caseDownAlt" : 'х',"caseUpAlt" : 'Х', "capsAlt" : 'Х', "shiftCapsAlt": 'х'},
      { "eventCode": "BracketRight", "caseDown": ']', caseUp : '}', caps : ']', shiftCaps: '}', "caseDownAlt" : 'ъ',"caseUpAlt" : 'Ъ', "capsAlt" : 'Ъ', "shiftCapsAlt": 'ъ'},
      { "eventCode": "Backslash", "caseDown": '\\',  caseUp : '|', caps : '\\', shiftCaps: '}',"caseDownAlt": '\\' , caseUpAlt : '/', "capsAlt" : '\\', "shiftCapsAlt": '/'},
      { "eventCode": "Delete", "value": 'Del', "isFunctional": 'true'},
    ],
  [
    { "eventCode": "CapsLock", "value": 'CapsLock', "isFunctional":true },
    { "eventCode": "KeyA", "caseDown": 'a', "caseUp" : 'A', "caps" : 'A', "shiftCaps": 'a',"caseDownAlt": 'ф', "caseUpAlt" : 'Ф', "capsAlt" : 'Ф', "shiftCapsAlt": 'ф'  },
    { "eventCode": "KeyS", "caseDown": 's', "caseUp" : 'S', "caps" : 'S', "shiftCaps": 's',"caseDownAlt": 'ы', "caseUpAlt" : 'Ы', "capsAlt" : 'Ы', "shiftCapsAlt": 'ы' },
    { "eventCode": "KeyD", "caseDown": 'd', "caseUp" : 'D', "caps" : 'D', "shiftCaps": 'd',"caseDownAlt": 'в', "caseUpAlt" : 'В', "capsAlt" : 'В', "shiftCapsAlt": 'в' },
    { "eventCode": "KeyF", "caseDown": 'f', "caseUp" : 'F', "caps" : 'F', "shiftCaps": 'f',"caseDownAlt": 'а', "caseUpAlt" : 'А', "capsAlt" : 'А', "shiftCapsAlt": 'а' },
    { "eventCode": "KeyG", "caseDown": 'g', "caseUp" : 'G', "caps" : 'G', "shiftCaps": 'g',"caseDownAlt": 'п', "caseUpAlt" : 'П', "capsAlt" : 'П', "shiftCapsAlt": 'п' },
    { "eventCode": "KeyH", "caseDown": 'h', "caseUp" : 'H', "caps" : 'H', "shiftCaps": 'h',"caseDownAlt": 'р', "caseUpAlt" : 'Р', "capsAlt" : 'Р', "shiftCapsAlt": 'р' },
    { "eventCode": "KeyJ", "caseDown": 'j', "caseUp" : 'J', "caps" : 'J', "shiftCaps": 'j',"caseDownAlt": 'о', "caseUpAlt" : 'О', "capsAlt" : 'О', "shiftCapsAlt": 'о' },
    { "eventCode": "KeyK", "caseDown": 'k', "caseUp" : 'K', "caps" : 'K', "shiftCaps": 'k',"caseDownAlt": 'л', "caseUpAlt" : 'Л', "capsAlt" : 'Л', "shiftCapsAlt": 'л' },
    { "eventCode": "KeyL", "caseDown": 'l', "caseUp" : 'L', "caps" : 'L', "shiftCaps": 'l',"caseDownAlt": 'д', "caseUpAlt" : 'Д', "capsAlt" : 'Д', "shiftCapsAlt": 'д' },
    { "eventCode": "Semicolon", "caseDown": ';', "caseUp" : ':', "caps" : ':', "shiftCaps": ';',"caseDownAlt": 'ж', "caseUpAlt" : 'Ж', "capsAlt" : 'Ж', "shiftCapsAlt": 'ж' },
    { "eventCode": "Quote", "caseDown": '\'', "caseUp" : '"', "caps" : '\'', "shiftCaps": '"',"caseDownAlt": 'э', "caseUpAlt" : 'Э', "capsAlt" : 'Э', "shiftCapsAlt": 'э'  },
    { "eventCode": "Enter",  "value": 'Enter',  "isFunctional": true},
  ],

  [
    { "eventCode": "ShiftLeft", "value": 'Shift', "isFunctional": true, "keyCode": '16' },
    { "eventCode": "KeyZ", "caseDown": 'z', "caseUp" : 'Z', "caps" : 'Z', "shiftCaps": 'z',"caseDownAlt": 'я', "caseUpAlt" : 'Я', "capsAlt" : 'Я', "shiftCapsAlt": 'Я' },
    { "eventCode": "KeyX", "caseDown": 'x', "caseUp" : 'X', "caps" : 'X', "shiftCaps": 'x',"caseDownAlt": 'ч', "caseUpAlt" : 'Ч', "capsAlt" : 'Ч', "shiftCapsAlt": 'Ч'},
    { "eventCode": "KeyC", "caseDown": 'c', "caseUp" : 'C', "caps" : 'C', "shiftCaps": 'C',"caseDownAlt": 'с', "caseUpAlt" : 'С', "capsAlt" : 'С', "shiftCapsAlt": 'с'},
    { "eventCode": "KeyV", "caseDown": 'v', "caseUp" : 'V', "caps" : 'V', "shiftCaps": 'v',"caseDownAlt": 'м', "caseUpAlt" : 'М', "capsAlt" : 'М', "shiftCapsAlt": 'м'},
    { "eventCode": "KeyB",  "caseDown": 'b', "caseUp" : 'B', "caps" : 'B', "shiftCaps": 'b',"caseDownAlt": 'и', "caseUpAlt" : 'И', "capsAlt" : 'И', "shiftCapsAlt": 'и'},
    { "eventCode": "KeyN", "caseDown": 'n', "caseUp" : 'N', "caps" : 'N', "shiftCaps": 'n',"caseDownAlt": 'т', "caseUpAlt" : 'Т', "capsAlt" : 'Т', "shiftCapsAlt": 'т'},
    { "eventCode": "KeyM","caseDown": 'm', "caseUp" : 'M', "caps" : 'M', "shiftCaps": 'm',"caseDownAlt": 'ь', "caseUpAlt" : 'Ь', "capsAlt" : 'Ь', "shiftCapsAlt": 'ь'},
    { "eventCode": "Comma",  "caseDown": ',', "caseUp" : '<', "caps" : '<', "shiftCaps": ',',"caseDownAlt": 'б', "caseUpAlt" : 'Б', "capsAlt" : 'Б', "shiftCapsAlt": 'б'},
    { "eventCode": "Period", "caseDown": '.', "caseUp" : '>', "caps" : '>', "shiftCaps": '.',"caseDownAlt": 'ю', "caseUpAlt" : 'Ю', "capsAlt" : 'Ю', "shiftCapsAlt": 'ю'},
    { "eventCode": "Slash","caseDown": '/', "caseUp" : '?', "caps" : '?', "shiftCaps": '/',"caseDownAlt": '.', "caseUpAlt" : ',', "capsAlt" : ',', "shiftCapsAlt": '.'},
    { "eventCode": "ArrowUp", "value": '↑', "isFunctional": true},
    { "eventCode": "ShiftRight",  "value": 'Shift', "isFunctional": true, "keyCode": '16' },
  ],
  [{ "eventCode": "ControlLeft", "value": 'Ctrl',"isFunctional": true },
  { "eventCode": "MetaLeft", "value": '⊞', "isFunctional": true },
  { "eventCode": "AltLeft", "value": 'Alt',"isFunctional": true, "keyCode": '18' },
  { "eventCode": "Space", "value": '', "isFunctional" : true},
  { "eventCode": "AltRight", "value": 'Alt',"isFunctional": true, "keyCode": '18'},
  { "eventCode": "ArrowLeft", "value": '←', "isFunctional": true},
  { "eventCode": "ArrowDown", "value": '↓', "isFunctional": true},
  { "eventCode": "ArrowRight", "value": '→', "isFunctional": true},
  { "eventCode": "ControlRight", "value": 'Ctrl', "isFunctional": true},
  ],
];

const FIRST_LANG_SWITCH_KEY_CODE = 16;
const SECOND_LANG_SWITCH_KEY_CODE = 18;



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

    if(item.keyCode) {
      keyEl.setAttribute("data-keyCode", item.keyCode);
    }
    keyEl.addEventListener('mousedown', event => keyboardKeyClickHandler(event));
    keyEl.addEventListener('mouseup', event => keyboardKeyClickHandler(event))

    rowEl.appendChild(keyEl);
  })

  return rowEl;
}

function handleLanguageSwitch(event) {
  if(event.type !== 'keyup' || ![FIRST_LANG_SWITCH_KEY_CODE, SECOND_LANG_SWITCH_KEY_CODE].includes(event.keyCode)) {
    return
    
  }
  console.log(event)
  const targetKeyCode = event.keyCode === FIRST_LANG_SWITCH_KEY_CODE ? SECOND_LANG_SWITCH_KEY_CODE : FIRST_LANG_SWITCH_KEY_CODE;
  const targetKeyEl = document.querySelector(`div.keyboard__key--pressed[data-keyCode="${targetKeyCode}"]`)

  if(targetKeyEl){
    console.log('Language')
  }
}

function keyEventHandler(event) {
  if (event.repeat) {
    return
  }

  const targetEl = document.querySelector(`div[data-code="${event.code}"]`);
  if (targetEl) {
    targetEl.classList.toggle('keyboard__key--pressed')
  }

  handleLanguageSwitch(event)
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