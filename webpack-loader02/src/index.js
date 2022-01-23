import imga from './a.jpg';
import style from './index.scss';
import createAvatar from './createAvatar';

createAvatar();

var img = new Image();
img.src = imga;
img.classList.add(style.avatar);

var root = document.getElementById('root');
root.append(img);