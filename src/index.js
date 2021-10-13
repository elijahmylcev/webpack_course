import * as $ from 'jquery'
import "@babel/polyfill";
import Post from './Post'
import json from './assets/json'
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import WebpackLogo from './assets/webpack-logo'
import babel from './babel.js'
import './styles/styles.css'
import './styles/scss.scss';

const post = new Post('Webpack Post Title', WebpackLogo);
console.log('Post to string:', post.toString());

$('pre').addClass('code').html(post.toString())


console.log('Json:', json);
console.log('xml:', xml);
console.log('csv:', csv);