// import * as $ from 'jquery'
import "@babel/polyfill";
import Post from './Post'
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import WebpackLogo from './assets/webpack-logo'
import React from 'react';
import { render } from 'react-dom';
import babel from './babel.js'
import './styles/styles.css'
import './styles/scss.scss';

const post = new Post('Webpack Post Title', WebpackLogo);
console.log('Post to string:', post.toString());

// $('pre').addClass('code').html(post.toString())

const App = () => (
    <div class="container">
            <h1>Webpack Course</h1>
    
            <hr/>
    
            <div className="logo" />
    
            <pre />
    
            <hr/>
    
            <div class="card">
                <h2>Scss</h2>
            </div>
    </div>
)

render(<App />, document.getElementById('app'))

// console.log('Json:', json);
// console.log('xml:', xml);
// console.log('csv:', csv);