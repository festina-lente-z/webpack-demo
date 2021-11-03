import imga from './a.jpg';

var img = new Image();
img.src = imga;

var root = document.getElementById('root');
root.append(img);