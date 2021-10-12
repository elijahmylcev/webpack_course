import * as $ from 'jquery'

import Post from './Post'
import json from './assets/json'
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import WebpackLogo from './assets/webpack-logo'
import './styles/styles.css'

const post = new Post('Webpack Post Title', WebpackLogo);
console.log('Post to string:', post.toString());

$('pre').html(post.toString())


console.log('Json:', json);
console.log('xml:', xml);
console.log('csv:', csv);