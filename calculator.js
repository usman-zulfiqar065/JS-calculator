const addValue = (value) => {
  document.getElementById('screen').value += value;
}

const clearValue = () => {
  let screenInput = document.getElementById('screen');
  let parent = screenInput.parentNode;
  screenInput.value = ''; 
  parent.innerHTML = '';
  parent.appendChild(screenInput);
}

const processData = () => {
  const screenInput = document.getElementById('screen');
  const node = document.createElement("span");
  node.classList.add("text-end")
  const textnode = document.createTextNode(screenInput.value);
  node.appendChild(textnode);
  screenInput.parentNode.insertBefore(node, screenInput);
  document.getElementById('screen').value = eval(screenInput.value);

}

const removeLast = () => {
  let value = document.getElementById('screen').value;
  document.getElementById('screen').value = value.slice(0, value.length-1)
}