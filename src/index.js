import './styles.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = '<h1>Webpack Web Project</h1>';

  return element;
}

document.body.appendChild(component());
