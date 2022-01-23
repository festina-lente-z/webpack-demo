import imga from './a.jpg';

function createAvatar() {
  var img = new Image();
  img.src = imga;
  img.classList.add('avatar');

  var root = document.getElementById('root');
  root.append(img);
}

export default createAvatar;