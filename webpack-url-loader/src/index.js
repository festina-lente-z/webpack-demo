import imga from './a.jpg';
import './index.css';

var img = new Image();
img.src = imga;
img.classList.add('imga');

var root = document.getElementById('root');
root.append(img);