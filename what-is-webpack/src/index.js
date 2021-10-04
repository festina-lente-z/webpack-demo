// ES Module 模块引入方式
// import Header from './header.js';
// import Sidebar from './sidebar.js';
// import Content from './content.js';
// var Header = require('./header.js');
// var Sidebar = require('./sidebar.js');
// var Content = require('./content.js');
// var imga = require('./a.jpg');

import imga from './a.jpg';

var img = new Image();
img.src = imga;

var root = document.getElementById('root');
root.append(img);

// new Header();
// new Content();
// new Sidebar();



