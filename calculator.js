const addValue = (value) => {
  if (value == 'Math.PI' || value == 'Math.E') {
    value = eval(value);
  }
  document.getElementById('screen').value += value;
}

const clearValue = () => {
  let screenInput = document.getElementById('screen');
  let parent = screenInput.parentNode;
  screenInput.value = ''; 
  parent.innerHTML = '';
  parent.appendChild(screenInput);
}

const calculate = () => {
  const screenInput = document.getElementById('screen');
  let expression = screenInput.value;
  const node = document.createElement("span");
  node.classList.add("text-end")
  try {
    const textnode = document.createTextNode(expression);
    expression = expression.replace(/sin\(/g, 'Math.sin(');
    expression = expression.replace(/cos\(/g, 'Math.cos(');
    expression = expression.replace(/tan\(/g, 'Math.tan(');
    expression = expression.replace(/sqrt/g, 'Math.sqrt');
    expression = expression.replace(/log/g, 'Math.log');
    document.getElementById('screen').value = eval(expression);
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