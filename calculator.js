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
  try {
    const textnode = document.createTextNode(screenInput.value);
    document.getElementById('screen').value = eval(screenInput.value);
    node.appendChild(textnode);
  }
  catch(err) {
    const textnode = document.createTextNode(err.message);
    node.appendChild(textnode);
    node.classList.add("text-danger")
  }
  screenInput.parentNode.insertBefore(node, screenInput);
}

const removeLast = () => {
  let value = document.getElementById('screen').value;
  document.getElementById('screen').value = value.slice(0, value.length-1)
}