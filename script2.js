
let inputBox = document.querySelector('#myInput');
let addButton = document.querySelector('.addBtn');
let toDoUl = document.querySelector('#myUL')


function newElement()
{
  if (inputBox.value == ''){
    inputBox.placeholder = 'Please enter to-do-list'
    }

  else{
  let toDoLi = document.createElement('li');
  let writtenText = document.createTextNode(inputBox.value);
  toDoLi.append(writtenText);
  toDoUl.append(toDoLi);
  inputBox.value = "";
  

  let newSpan = document.createElement("span");
  let closeButton = document.createTextNode("\u2620");
  newSpan.className = "close";
  newSpan.append(closeButton);
  toDoLi.append(newSpan);

  let close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  let del = this.parentElement;
  del.style.display = "none";

  }}

}
}